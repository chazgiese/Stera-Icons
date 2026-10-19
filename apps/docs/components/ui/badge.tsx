import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  [
    // Group
    "group/badge",
    // Base
    "inline-flex items-center justify-center rounded-full",
    // Sizing
    "w-fit shrink-0 gap-1",
    // Variants
    "has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1",
    // Other
    "overflow-hidden whitespace-nowrap transition-all [&>svg]:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        default: "bg-surface-muted text-text",
        outline: "inset-ring inset-ring-border bg-surface text-text",
        solid: "bg-surface-inverse text-text-oninverse",
        brand: "bg-surface-brand-subtle text-text-brand-strong",
        "brand-outline": "inset-ring inset-ring-border-brand bg-surface text-text-brand",
        "brand-solid": "bg-surface-brand text-text-onbrand",
        accent: "bg-surface-accent-subtle text-text-accent-strong",
        "accent-outline": "inset-ring inset-ring-border-accent bg-surface text-text-accent",
        "accent-solid": "bg-surface-accent text-text-onaccent",
        danger: "bg-surface-danger-subtle text-text-danger-strong",
        "danger-outline": "inset-ring inset-ring-border-danger bg-surface text-text-danger",
        "danger-solid": "bg-surface-danger text-text-ondanger",
        success: "bg-surface-success-subtle text-text-success-strong",
        "success-outline": "inset-ring inset-ring-border-success bg-surface text-text-success",
        "success-solid": "bg-surface-success text-text-onsuccess",
        warning: "bg-surface-warning-subtle text-text-warning-strong",
        "warning-outline":
          "inset-ring inset-ring-border-warning bg-surface text-text-warning-subtle",
        "warning-solid": "bg-surface-warning text-text-onwarning",
      },
      size: {
        sm: "h-4 px-1.5 st-body-sm-strong [&_svg]:size-3",
        md: "h-5 px-2 st-body-sm-strong [&_svg]:size-3",
        lg: "h-6 px-2 st-body-sm-strong [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

function Badge({
  className,
  variant = "default",
  size = "md",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant, size }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
      size,
    },
  })
}

export { Badge, badgeVariants }
