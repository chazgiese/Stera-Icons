"use client"

import { useMemo, useCallback, useDeferredValue } from "react"
import { useSearchParams } from "next/navigation"
import type { IconCategory, IconEntry } from "@/lib/types"
import { CategorySections } from "@/components/category-sections"
import { CategorySidebar } from "@/components/category-sidebar"
import { IconDetailDrawer } from "@/components/icon-detail-drawer"
import { ScrollSpyProvider } from "@/components/scroll-spy"
import { useSearchQuery, useSetSearchQuery } from "@/components/search-provider"
import { useCategorizedIcons } from "@/hooks/use-categorized-icons"
import { useIconVariant } from "@/hooks/useIconVariant"

interface IconExplorerProps {
  icons: IconEntry[];
  categories: IconCategory[];
}

// Reads the URL when called rather than from useSearchParams, so the handlers
// below keep a stable identity and don't re-render the memoized icon cards
function setIconParam(kebabName: string | null) {
  const params = new URLSearchParams(window.location.search);
  if (kebabName) {
    params.set("icon", kebabName);
  } else {
    params.delete("icon");
  }
  const qs = params.toString();
  // Keep the #category fragment so a deep link survives opening the drawer
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`
  );
}

export function IconExplorer({ icons, categories }: IconExplorerProps) {
  const searchParams = useSearchParams();
  const setQuery = useSetSearchQuery();
  const { weight, duotone } = useIconVariant();

  // Deferred so rendering the results never blocks typing in the search input
  const query = useDeferredValue(useSearchQuery());
  const { sections, counts } = useCategorizedIcons(icons, categories, query);
  const categoryIds = useMemo(() => categories.map((c) => c.id), [categories]);

  // The URL query param is the source of truth for the open drawer
  const iconParam = searchParams.get("icon");
  const selectedIcon = useMemo(
    () => (iconParam ? icons.find((i) => i.kebabName === iconParam) ?? null : null),
    [icons, iconParam]
  );

  // history.replaceState updates useSearchParams without a server round trip,
  // so the drawer opens and closes immediately
  const handleIconClick = useCallback((icon: IconEntry) => {
    setIconParam(icon.kebabName);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setIconParam(null);
  }, []);

  // Closes the drawer and searches for the tag
  const handleTagClick = useCallback((tag: string) => {
    setQuery(tag);
    setIconParam(null);
    // Instant: the results replace the page under the scroll, so gliding there
    // would animate over content that's already gone
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [setQuery]);

  return (
    <ScrollSpyProvider order={categoryIds}>
      <CategorySidebar
        categories={categories}
        counts={counts}
        weight={weight}
        duotone={duotone}
      />
      <main className="min-w-0 flex-1 px-4 py-4 pb-24">
        <CategorySections
          sections={sections}
          weight={weight}
          duotone={duotone}
          onIconClick={handleIconClick}
        />
        <IconDetailDrawer
          icon={selectedIcon}
          onClose={handleDrawerClose}
          onTagClick={handleTagClick}
        />
      </main>
    </ScrollSpyProvider>
  );
}
