import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      orientation={orientation}
      className={cn(
        // Base
        "flex",
        // Sizing
        "gap-2",
        // Other
        "group/tabs data-[orientation=horizontal]:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  [
    // Base
    "relative inline-flex items-center justify-center rounded-xl p-0.5 st-body-md-strong text-text-subtle group-data-[orientation=vertical]/tabs:flex-col",
    // Sizing
    "w-fit group-data-[orientation=vertical]/tabs:h-fit",
    // Variants
    "data-[variant=line]:rounded-none",
    // Other
    "group/tabs-list",
  ],
  {
    variants: {
      variant: {
        default: "bg-surface-muted",
        // For tabs nested inside a surface-muted container (e.g. a code block header)
        inset: "bg-surface-subtle",
        line: "gap-1 bg-transparent",
      },
      size: {
        sm: "group-data-[orientation=horizontal]/tabs:h-8",
        md: "group-data-[orientation=horizontal]/tabs:h-9",
        lg: "group-data-[orientation=horizontal]/tabs:h-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      data-size={size}
      className={cn(tabsListVariants({ variant, size }), className)}
      {...props}
    >
      <TabsIndicator />
      {children}
    </TabsPrimitive.List>
  )
}

function TabsIndicator({ className, ...props }: TabsPrimitive.Indicator.Props) {
  return (
    <TabsPrimitive.Indicator
      data-slot="tabs-indicator"
      renderBeforeHydration
      className={cn(
        // Base
        "pointer-events-none absolute top-0 left-0 z-0",
        // Animation — slide between tabs; snap on first paint and for reduced motion
        "transition-[translate,width,height] duration-200 ease-out motion-reduce:transition-none data-[activation-direction=none]:transition-none",
        // Pill variants (default, inset) — pill covering the active tab (orientation-agnostic)
        "group-not-data-[variant=line]/tabs-list:h-(--active-tab-height) group-not-data-[variant=line]/tabs-list:w-(--active-tab-width) group-not-data-[variant=line]/tabs-list:[translate:var(--active-tab-left)_var(--active-tab-top)] group-not-data-[variant=line]/tabs-list:rounded-[10px]",
        // Default — raised pill
        "group-data-[variant=default]/tabs-list:bg-surface group-data-[variant=default]/tabs-list:shadow-sm",
        // Inset — pill matches the surrounding container, reading as cut through the track
        "group-data-[variant=inset]/tabs-list:bg-surface-muted",
        // Line variant — sliding bar along the active edge
        "group-data-[variant=line]/tabs-list:bg-text",
        // Line — horizontal: bar under the active tab
        "group-data-[orientation=horizontal]/tabs:group-data-[variant=line]/tabs-list:h-0.5 group-data-[orientation=horizontal]/tabs:group-data-[variant=line]/tabs-list:w-(--active-tab-width) group-data-[orientation=horizontal]/tabs:group-data-[variant=line]/tabs-list:[translate:var(--active-tab-left)_calc(var(--active-tab-top)+var(--active-tab-height)+3px)]",
        // Line — vertical: bar to the right of the active tab
        "group-data-[orientation=vertical]/tabs:group-data-[variant=line]/tabs-list:w-0.5 group-data-[orientation=vertical]/tabs:group-data-[variant=line]/tabs-list:h-(--active-tab-height) group-data-[orientation=vertical]/tabs:group-data-[variant=line]/tabs-list:[translate:calc(var(--active-tab-left)+var(--active-tab-width)+2px)_var(--active-tab-top)]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        // Base — highlight lives on the shared TabsIndicator; trigger keeps its own
        // transparent border so layout stays stable when the indicator's border appears.
        "relative z-10 inline-flex items-center justify-center border border-transparent whitespace-nowrap text-text-subtle transition-all group-data-[orientation=vertical]/tabs:justify-start",
        // Sizing
        "h-[calc(100%-1px)] flex-1 group-data-[orientation=vertical]/tabs:w-full",
        // SM (Default)
        "rounded-[10px] group-data-[size=sm]/tabs-list:gap-1.5 group-data-[size=sm]/tabs-list:px-2.5 group-data-[size=sm]/tabs-list:py-1.5 group-data-[size=sm]/tabs-list:[&_svg:not([class*='size-'])]:size-4",
        // MD
        "group-data-[size=md]/tabs-list:gap-2 group-data-[size=md]/tabs-list:px-3 group-data-[size=md]/tabs-list:py-1.5 group-data-[size=md]/tabs-list:st-body-md-strong group-data-[size=md]/tabs-list:[&_svg:not([class*='size-'])]:size-4",
        // LG
        "group-data-[size=lg]/tabs-list:gap-2 group-data-[size=lg]/tabs-list:px-4 group-data-[size=lg]/tabs-list:py-2 group-data-[size=lg]/tabs-list:[&_svg:not([class*='size-'])]:size-4",
        // Active — only the text color changes on the trigger itself
        "data-active:text-text",
        // Other
        "hover:text-text focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        // Base
        "text-sm outline-none",
        // Sizing
        "flex-1",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
