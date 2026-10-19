"use client"

import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Drawer,
  DrawerDescription,
  DrawerHeader,
  DrawerPopup,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SiSidebarLeft } from "stera-icons"

// File map:
//   1. Constants & context        (SIDEBAR_* constants, SidebarContext, useSidebar)
//   2. Provider & shell           (SidebarProvider, Sidebar, SidebarInset, SidebarRail, SidebarTrigger)
//   3. Layout primitives          (SidebarHeader, SidebarFooter, SidebarSeparator, SidebarContent, SidebarInput)
//   4. Group                      (SidebarGroup, SidebarGroupLabel, SidebarGroupAction, SidebarGroupContent)
//   5. Menu                       (SidebarMenu*, sidebarMenuButtonVariants)

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

/** Access the surrounding `SidebarProvider`'s state and toggle helpers. */
function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

/** Top-level wrapper that owns sidebar open/closed state, wires the cookie, and registers the keyboard shortcut. */
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // Internal state; `openProp`/`setOpenProp` allow external control.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  // `openRef` lets `setOpen` resolve updater functions against the latest value
  // without re-creating the callback on every toggle. Synced via effect because
  // React 19 forbids mutating refs during render.
  const openRef = React.useRef(open)
  React.useEffect(() => {
    openRef.current = open
  })
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState =
        typeof value === "function" ? value(openRef.current) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key !== SIDEBAR_KEYBOARD_SHORTCUT ||
        !(event.metaKey || event.ctrlKey)
      ) {
        return
      }
      // Don't steal ⌘B / Ctrl+B from text editors and form fields where it
      // commonly means "bold" or is otherwise expected input.
      const target = event.target as HTMLElement | null
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return
      }
      event.preventDefault()
      toggleSidebar()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        data-slot="sidebar-wrapper"
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          } as React.CSSProperties
        }
        className={cn(
          // Base
          "flex min-h-svh",
          // Sizing
          "w-full",
          // Variants
          "has-data-[variant=inset]:bg-surface",
          // Other
          "group/sidebar-wrapper",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

/** Renders the sidebar shell. Picks a Drawer on mobile, a fixed positioned container on desktop, or a static container when `collapsible="none"`. */
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  dir,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()
  // Avoid SSR hydration mismatch when isMobile flips post-mount.
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Static container — `variant` and `side` don't apply because nothing collapses, floats, or insets.
  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          // Base
          "flex flex-col bg-surface text-text",
          // Sizing
          "h-full w-(--sidebar-width)",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (mounted && isMobile) {
    return (
      <Drawer open={openMobile} onOpenChange={setOpenMobile} side={side}>
        <DrawerPopup
          dir={dir}
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="w-(--sidebar-width)"
          showCloseButton={false}
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
        >
          <DrawerHeader className="sr-only">
            <DrawerTitle>Sidebar</DrawerTitle>
            <DrawerDescription>Displays the mobile sidebar.</DrawerDescription>
          </DrawerHeader>
          {/* Consumer-supplied div props (className, style, onClick, ...) land here so they aren't silently dropped on mobile. */}
          <div
            className={cn("flex h-full w-full flex-col", className)}
            {...props}
          >
            {children}
          </div>
        </DrawerPopup>
      </Drawer>
    )
  }

  return (
    <div
      className="group peer hidden text-text md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          // Base
          "relative bg-transparent transition-[width] duration-200 ease-linear",
          // Sizing
          "w-(--sidebar-width)",
          // Variants
          "group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
      />
      <div
        data-slot="sidebar-container"
        data-side={side}
        className={cn(
          // Base
          "fixed z-10 hidden transition-[left,right,width] duration-200 ease-linear md:flex",
          // Position
          "inset-y-0 data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Sizing
          "h-svh w-(--sidebar-width)",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="flex size-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:inset-ring group-data-[variant=floating]:inset-ring-border"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

/** Icon button that toggles the sidebar. Place anywhere inside `SidebarProvider`. */
function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon-sm"
      className={className}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <SiSidebarLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

/** The thin draggable strip along the sidebar edge that toggles open/closed on click. */
function SidebarRail({ className, ...props }: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        // Base
        "absolute z-20 hidden transition-all ease-linear after:absolute hover:after:bg-border sm:flex",
        // Position
        "inset-y-0 group-data-[collapsible=offcanvas]:translate-x-0 group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:inset-y-0 after:inset-s-1/2 group-data-[collapsible=offcanvas]:after:left-full ltr:-translate-x-1/2 rtl:-translate-x-1/2",
        // Sizing
        "w-4 after:w-0.5",
        // Variants
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize [[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        // Other
        "hover:group-data-[collapsible=offcanvas]:bg-surface",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
}

/** Main content area that sits next to the sidebar. Adapts margins/rounding for the `inset` variant. */
function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        // Base
        "relative flex flex-1 flex-col",
        // Sizing
        "w-full",
        // Variants
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props}
    />
  )
}

/** Pre-styled `Input` for use inside the sidebar (e.g. a search field). */
function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn(
        // Base
        "bg-surface shadow-none",
        // Sizing
        "h-8 w-full",
        className
      )}
      {...props}
    />
  )
}

/** Sticky-feeling header region at the top of the sidebar. */
function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn(
        // Base
        "flex flex-col p-2",
        // Sizing
        "gap-2",
        className
      )}
      {...props}
    />
  )
}

/** Footer region at the bottom of the sidebar. */
function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn(
        // Base
        "flex flex-col p-2",
        // Sizing
        "gap-2",
        className
      )}
      {...props}
    />
  )
}

/** Horizontal divider between sidebar groups. */
function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn(
        // Base
        "bg-border",
        // Sizing
        "w-auto",
        // Position
        "mx-2",
        className
      )}
      {...props}
    />
  )
}

/** Scrollable middle region between header and footer. */
function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        // Base
        "scrollbar-hide flex min-h-0 flex-1 flex-col overflow-auto",
        // Sizing
        "gap-2",
        // Variants
        "group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

/** Container that visually clusters a label, optional action, and a menu. */
function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn(
        // Base
        "relative flex flex-col py-2 px-4",
        // Sizing
        "w-full min-w-0",
        className
      )}
      {...props}
    />
  )
}

/** Section heading inside a `SidebarGroup`. Polymorphic via `render`. Hidden in icon-collapsed mode. */
function SidebarGroupLabel({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          // Base
          "flex shrink-0 items-center rounded-md p-3 pb-4 st-body-md-strong text-text-subtle ring-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2",
          // Variants
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          // Other
          "[&>svg]:size-4 [&>svg]:shrink-0",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "sidebar-group-label",
      sidebar: "group-label",
    },
  })
}

/** Optional icon-button pinned to the top-right of a group (e.g. an "add" affordance). */
function SidebarGroupAction({
  className,
  render,
  ...props
}: useRender.ComponentProps<"button">) {
  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(
      {
        className: cn(
          // Base
          "absolute flex items-center justify-center rounded-md p-0 text-text ring-ring outline-hidden transition-transform after:absolute hover:bg-surface-hover hover:text-text focus-visible:ring-2 md:after:hidden",
          // Position
          "top-3.5 right-3 after:-inset-2",
          // Sizing
          "aspect-square w-5",
          // Variants
          "group-data-[collapsible=icon]:hidden",
          // Other
          "[&>svg]:size-4 [&>svg]:shrink-0",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "sidebar-group-action",
      sidebar: "group-action",
    },
  })
}

/** Body slot for the group, sits below `SidebarGroupLabel`. */
function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn(
        // Base
        "st-body-md-compact",
        // Sizing
        "w-full",
        className
      )}
      {...props}
    />
  )
}

/** Vertical list of `SidebarMenuItem`s. Renders as `<ul>`. */
function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn(
        // Base
        "flex flex-col",
        // Sizing
        "w-full min-w-0",
        className
      )}
      {...props}
    />
  )
}

/** A single row in `SidebarMenu`. Wraps a button (and optionally action/badge). Renders as `<li>`. */
function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn(
        // Base
        "relative",
        // Other
        "group/menu-item",
        className
      )}
      {...props}
    />
  )
}

/** cva variants shared by every `SidebarMenuButton`. Exported for consumers building custom menu items. */
const sidebarMenuButtonVariants = cva(
  [
    // Base
    "flex items-center align-center overflow-hidden rounded-full p-3 text-left text-text-subtle [&_svg]:text-text-subtlest st-body-md-compact ring-ring outline-hidden transition-[width,height,padding] hover:text-text hover:[&_svg]:text-text focus-visible:ring-ring active:text-text transition-colors",
    // Sizing
    "w-full gap-3",
    // Variants — adjacent action button reserves space
    "group-has-data-[sidebar=menu-action]/menu-item:pr-8",
    // Variants — collapsed icon mode
    "group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!",
    // Variants — open state (e.g. expanded submenu)
    "data-open:hover:bg-surface-hover data-open:hover:text-text",
    // Variants — active state
    "data-active:bg-surface-subtle data-active:st-body-md-strong data-active:text-text data-active:[&_svg]:text-text",
    // Other
    "peer/menu-button group/menu-button disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5 [&>span:last-child]:truncate",
  ],
  {
    variants: {
      variant: {
        default: "",
        outline:
          "bg-surface inset-ring inset-ring-border hover:bg-surface-hover hover:text-text hover:inset-ring-surface-hover",
      },
      size: {
        default: "st-body-md-compact",
        sm: "h-7 st-body-sm",
        lg: "h-12 st-body-md-compact group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/** Primary clickable row in `SidebarMenu`. Polymorphic via `render`. Pass `tooltip` to show a label when collapsed to icons. */
function SidebarMenuButton({
  render,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: useRender.ComponentProps<"button"> & {
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const { isMobile, state } = useSidebar()
  const comp = useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(
      {
        className: cn(sidebarMenuButtonVariants({ variant, size }), className),
      },
      props
    ),
    render: !tooltip ? render : <TooltipTrigger render={render} />,
    state: {
      slot: "sidebar-menu-button",
      sidebar: "menu-button",
      size,
      active: isActive,
    },
  })

  if (!tooltip) {
    return comp
  }

  const tooltipProps =
    typeof tooltip === "string" ? { children: tooltip } : tooltip

  return (
    <Tooltip>
      {comp}
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltipProps}
      />
    </Tooltip>
  )
}

/** Icon-button affordance pinned to the right of a `SidebarMenuButton` (e.g. a "more" menu). Set `showOnHover` to fade it in on hover/focus. */
function SidebarMenuAction({
  className,
  render,
  showOnHover = false,
  ...props
}: useRender.ComponentProps<"button"> & {
  showOnHover?: boolean
}) {
  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(
      {
        className: cn(
          // Base
          "absolute flex items-center justify-center rounded-md p-0 text-text ring-ring outline-hidden transition-transform after:absolute hover:bg-surface-hover hover:text-text focus-visible:ring-2 md:after:hidden",
          // Position
          "top-1.5 right-1 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 after:-inset-2",
          // Sizing
          "aspect-square w-5",
          // Variants
          "group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-text",
          // Other
          "[&>svg]:size-4 [&>svg]:shrink-0",
          showOnHover &&
            "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-active/menu-button:text-text-brand aria-expanded:opacity-100 md:opacity-0",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "sidebar-menu-action",
      sidebar: "menu-action",
    },
  })
}

/** Small numeric/status badge anchored to the right of a `SidebarMenuButton`. */
function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        // Base
        "flex items-center justify-center rounded-md px-1 st-body-sm text-text-subtlest tabular-nums select-none",
        // Variants
        "group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-text peer-data-active/menu-button:text-text-brand",
        // Other
        "pointer-events-none",
        className
      )}
      {...props}
    />
  )
}

/** Loading placeholder shaped like a `SidebarMenuButton`. Pass `showIcon` to include a square icon skeleton. */
function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%. Starts at a deterministic default so the
  // SSR markup matches the first client render, then randomizes after mount
  // (avoids a hydration mismatch warning).
  const [width, setWidth] = React.useState("70%")
  React.useEffect(() => {
    setWidth(`${Math.floor(Math.random() * 40) + 50}%`)
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn(
        // Base
        "flex items-center rounded-md px-2",
        // Sizing
        "h-8 gap-2",
        className
      )}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

/** Indented `<ul>` for nested menu items inside a `SidebarMenuItem`. Hidden in icon-collapsed mode. */
function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        // Base
        "flex flex-col border-l border-border px-2.5 py-0.5",
        // Position
        "mx-3.5 translate-x-px",
        // Sizing
        "min-w-0 gap-1",
        // Variants
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
}

/** A row inside `SidebarMenuSub`. Renders as `<li>`. */
function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn(
        // Base
        "relative",
        // Other
        "group/menu-sub-item",
        className
      )}
      {...props}
    />
  )
}

/** Clickable row inside `SidebarMenuSub`. Defaults to `<a>`; pass `render` to swap (e.g. Next.js `<Link>`). */
function SidebarMenuSubButton({
  render,
  size = "md",
  isActive = false,
  className,
  ...props
}: useRender.ComponentProps<"a"> & {
  size?: "sm" | "md"
  isActive?: boolean
}) {
  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">(
      {
        className: cn(
          // Base
          "flex items-center overflow-hidden rounded-md px-2 text-text ring-ring outline-hidden hover:bg-surface-hover hover:text-text focus-visible:ring-2 active:bg-surface-subtle-hover active:text-text",
          // Position
          "-translate-x-px",
          // Sizing
          "h-7 min-w-0 gap-2",
          // Variants
          "group-data-[collapsible=icon]:hidden data-active:bg-surface-brand-subtle data-active:text-text-brand data-[size=md]:text-sm data-[size=sm]:text-xs",
          // Other
          "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-text-subtle",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "sidebar-menu-sub-button",
      sidebar: "menu-sub-button",
      size,
      active: isActive,
    },
  })
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
