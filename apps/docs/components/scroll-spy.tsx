"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

// Tracks which registered section is under the navbar as the page scrolls.
//
// Sections register themselves through a callback ref, so sections that mount
// or unmount (e.g. while searching) are observed without any re-querying. One
// IntersectionObserver watches a band that starts at the navbar line; the
// first intersecting section in `order` is active.
//
// Two contexts: the registry is stable, so sections never re-render when the
// active id changes. Only the sidebar subscribes to the active id.

interface ScrollSpyRegistry {
  // Returns the cleanup for a React 19 callback ref
  register: (id: string, element: HTMLElement) => () => void;
  // Call when the user navigates to a section (anchor click, deep link) so the
  // sidebar updates immediately and intermediate sections don't flash active
  setActiveFromClick: (id: string) => void;
}

const ScrollSpyRegistryContext = createContext<ScrollSpyRegistry | null>(null);
const ActiveSectionContext = createContext<string | null>(null);

// After a click, the hold on observer updates releases once no scroll event
// has arrived for this long. Smooth scrolling fires scroll events every frame
// until it lands, so this tracks the real animation length (which varies with
// distance and how heavy the page is) without depending on `scrollend`, which
// Safari lacks. It also covers a click that causes no scroll at all
const SCROLL_QUIET_MS = 250;

function readNavbarHeight(): number {
  // The --spacing-navbar token is defined in app/ui/base.css; a temporary
  // element resolves its rem value to pixels
  const probe = document.createElement("div");
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  probe.style.height = "var(--spacing-navbar, 0px)";
  document.body.appendChild(probe);
  const height = probe.getBoundingClientRect().height;
  probe.remove();
  return height;
}

function isAtPageBottom(): boolean {
  const root = document.scrollingElement ?? document.documentElement;
  // A page that doesn't scroll (e.g. a few search results) is not "at the bottom"
  if (root.scrollHeight <= window.innerHeight + 1) return false;
  return window.scrollY + window.innerHeight >= root.scrollHeight - 2;
}

interface ScrollSpyProviderProps {
  // Section ids in document order
  order: string[];
  children: ReactNode;
}

export function ScrollSpyProvider({ order, children }: ScrollSpyProviderProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const orderRef = useRef(order);
  useEffect(() => {
    orderRef.current = order;
  }, [order]);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const idsByElement = useRef(new Map<Element, string>());
  const registered = useRef(new Set<string>());
  const intersecting = useRef(new Set<string>());
  const activeRef = useRef<string | null>(null);
  const suppressed = useRef(false);
  // Tears down the listeners and timer of the click currently being held
  const releaseHold = useRef<(() => void) | null>(null);

  const commit = useCallback((id: string | null) => {
    if (id === activeRef.current) return;
    activeRef.current = id;
    setActiveId(id);
  }, []);

  const recompute = useCallback(() => {
    if (suppressed.current) return;
    // A short final section may never reach the band, so at the bottom of a
    // scrollable page the last section on the page wins. Checked here rather
    // than only on scrollend because observer callbacks can arrive later and
    // would otherwise override it
    if (isAtPageBottom()) {
      const last = [...orderRef.current].reverse().find((id) => registered.current.has(id));
      if (last) {
        commit(last);
        return;
      }
    }
    const next = orderRef.current.find((id) => intersecting.current.has(id));
    if (next !== undefined) {
      commit(next);
      return;
    }
    // Nothing in the band (e.g. inside a gap): keep the current section unless
    // it was unmounted, then fall back to the first one still on the page
    if (activeRef.current && registered.current.has(activeRef.current)) return;
    commit(orderRef.current.find((id) => registered.current.has(id)) ?? null);
  }, [commit]);

  const getObserver = useCallback(() => {
    if (observerRef.current) return observerRef.current;
    const navbar = readNavbarHeight();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = idsByElement.current.get(entry.target);
          if (!id) continue;
          if (entry.isIntersecting) {
            intersecting.current.add(id);
          } else {
            intersecting.current.delete(id);
          }
        }
        recompute();
      },
      {
        // A band from the navbar line down to 60% of the viewport. With
        // first-in-order-wins, the active item switches exactly when the
        // previous section's bottom crosses the navbar line
        rootMargin: `-${navbar}px 0px -40% 0px`,
        threshold: 0,
      }
    );
    return observerRef.current;
  }, [recompute]);

  const register = useCallback(
    (id: string, element: HTMLElement) => {
      const observer = getObserver();
      idsByElement.current.set(element, id);
      registered.current.add(id);
      observer.observe(element);
      return () => {
        observer.unobserve(element);
        idsByElement.current.delete(element);
        registered.current.delete(id);
        intersecting.current.delete(id);
        recompute();
      };
    },
    [getObserver, recompute]
  );

  const setActiveFromClick = useCallback(
    (id: string) => {
      releaseHold.current?.();
      commit(id);
      // Hold the clicked section active until the scroll settles. Releasing
      // early would flash the sections scrolled past (smooth scrolling) or snap
      // a short last section back to the one above it
      suppressed.current = true;
      let quietTimer: ReturnType<typeof setTimeout> | null = null;
      const cleanup = () => {
        if (quietTimer) clearTimeout(quietTimer);
        window.removeEventListener("scrollend", release);
        window.removeEventListener("scroll", armQuietTimer);
        releaseHold.current = null;
      };
      const release = () => {
        cleanup();
        suppressed.current = false;
        recompute();
      };
      const armQuietTimer = () => {
        if (quietTimer) clearTimeout(quietTimer);
        quietTimer = setTimeout(release, SCROLL_QUIET_MS);
      };
      window.addEventListener("scrollend", release, { once: true });
      window.addEventListener("scroll", armQuietTimer, { passive: true });
      armQuietTimer();
      releaseHold.current = cleanup;
    },
    [commit, recompute]
  );

  // Reaching the bottom doesn't always change what intersects the band, so
  // the observer alone would miss it
  useEffect(() => {
    window.addEventListener("scrollend", recompute, { passive: true });
    return () => window.removeEventListener("scrollend", recompute);
  }, [recompute]);

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
      releaseHold.current?.();
    };
  }, []);

  const registry = useMemo<ScrollSpyRegistry>(
    () => ({ register, setActiveFromClick }),
    [register, setActiveFromClick]
  );

  return (
    <ScrollSpyRegistryContext.Provider value={registry}>
      <ActiveSectionContext.Provider value={activeId}>{children}</ActiveSectionContext.Provider>
    </ScrollSpyRegistryContext.Provider>
  );
}

export function useScrollSpyRegistry(): ScrollSpyRegistry {
  const registry = useContext(ScrollSpyRegistryContext);
  if (!registry) {
    throw new Error("useScrollSpyRegistry must be used within a ScrollSpyProvider");
  }
  return registry;
}

export function useActiveSection(): string | null {
  return useContext(ActiveSectionContext);
}
