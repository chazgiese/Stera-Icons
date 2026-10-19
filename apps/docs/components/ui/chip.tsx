import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const chipVariants = cva(
  [
    // Group
    "group/chip",
    // Base
    "inline-flex shrink-0 items-center justify-center rounded-full transition-all outline-none select-none",
    // Text
    "st-body-md-strong whitespace-nowrap",
    // Focus
    "focus-visible:inset-ring focus-visible:inset-ring-border-strongest focus-visible:ring-3 focus-visible:ring-ring",
    // Disabled
    "disabled:pointer-events-none disabled:opacity-50",
    // Icons
    "gap-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    // Other
    "overflow-hidden",
  ],
  {
    variants: {
      variant: {
        subtle:
          "bg-surface-muted text-text hover:bg-surface-muted-hover data-[active]:inset-ring-[1.5px] data-[active]:inset-ring-border-strongest data-[active]:bg-surface-muted",
        outline:
          "inset-ring inset-ring-border bg-surface text-text hover:bg-surface-hover data-[active]:inset-ring-[1.5px] data-[active]:inset-ring-border-strongest data-[active]:bg-surface-subtle",
      },
      size: {
        xs: "h-6 px-2 st-body-sm has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1",
        sm: "h-8 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        md: "h-9 px-3.5 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        lg: "h-10 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
      },
    },
    defaultVariants: {
      variant: "subtle",
      size: "xs",
    },
  }
)

function Chip({
  className,
  variant = "subtle",
  size = "xs",
  active,
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof chipVariants> & {
    active?: boolean
  }) {
  return (
    <ButtonPrimitive
      data-slot="chip"
      data-variant={variant}
      data-active={active || undefined}
      className={cn(chipVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Chip, chipVariants }
