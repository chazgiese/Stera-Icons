"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    // Group
    "group/button",
    // Base
    "inline-flex shrink-0 items-center justify-center rounded-full border border-transparent transition-all outline-none select-none",
    // Text
    "st-body-md-strong whitespace-nowrap",
    // Focus
    "focus-visible:border-border-strongest focus-visible:ring-3 focus-visible:ring-ring",
    // Disabled
    "disabled:pointer-events-none disabled:opacity-50",
    // Invalid
    "aria-invalid:border-border-danger-strong aria-invalid:ring-3 aria-invalid:ring-ring-danger",
    // Other
    "active:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        brand:
          "border-surface-brand bg-surface-brand text-text-onbrand hover:border-border-brand-strong hover:bg-surface-brand-hover focus-visible:border-border-brand-strong focus-visible:ring-ring-brand",
        accent:
          "border-surface-accent bg-surface-accent text-text-onaccent hover:border-border-accent-strong hover:bg-surface-accent-hover",
        outline:
          "bg-surface/60 bg-origin-border bg-linear-to-b from-alpha-2 to-alpha-1 border-none inset-ring inset-ring-alpha-2 inset-shadow-2xs-b dark:inset-shadow-2xs inset-shadow-alpha-2 backdrop-blur-sm text-text hover:to-alpha-2 aria-expanded:to-alpha-3 transition-colors",
        subtle:
          "border-none bg-surface-muted text-text-subtle hover:bg-surface-muted-hover aria-expanded:bg-surface-muted-hover aria-expanded:text-text",
        ghost:
          "hover:glass hover:text-text aria-expanded:bg-alpha-3 aria-expanded:text-text",
        danger:
          "border-surface-danger-subtle bg-surface-danger-subtle text-text-danger hover:border-surface-danger-subtle-hover hover:bg-surface-danger-subtle-hover focus-visible:border-border-danger-strong focus-visible:ring-ring-danger",
        link: "gap-1 text-text underline-offset-4 hover:underline",
      },
      size: {
        xs: "h-6 gap-1.5 rounded-lg px-2 st-body-sm-strong has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 has-data-[kbd=inline-end]:pr-1 has-data-[kbd=inline-start]:pl-1 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-2 px-3 st-body-sm-strong has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 has-data-[kbd=inline-end]:pr-1.5 has-data-[kbd=inline-start]:pl-1.5 data-[variant=link]:gap-1",
        md: "h-9 gap-2 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 has-data-[kbd=inline-end]:pr-2.5 has-data-[kbd=inline-start]:pl-2.5 data-[variant=link]:gap-1",
        lg: "h-11 gap-3 px-5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-5 has-data-[kbd=inline-end]:pr-3 has-data-[kbd=inline-start]:pl-3",
        icon: "size-9 [&_svg:not([class*='size-'])]:size-5",
        "icon-xs": "size-6 rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-11 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
)

function Button({
  className,
  variant = "outline",
  size = "md",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, size, className }))}
      data-slot="button"
      data-variant={variant}
      {...props}
    />
  )
}

export { Button, buttonVariants }
