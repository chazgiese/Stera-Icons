import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        // Group
        "group/input-group",
        // Base
        "relative flex items-center rounded-xl inset-ring inset-ring-border shadow-xs transition-[color,box-shadow] outline-none",
        // Sizing
        "h-9 w-full min-w-0 has-[[data-slot=input-group-control][data-size=lg]]:h-11 has-[[data-slot=input-group-control][data-size=sm]]:h-8",
        // Focus
        "has-[[data-slot=input-group-control]:focus-visible]:inset-ring-border-brand-strong in-data-[slot=combobox-content]:focus-within:inset-ring-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring-brand",
        // Disabled
        "has-[[data-slot=input-group-control]:disabled]:pointer-events-none has-[[data-slot=input-group-control]:disabled]:cursor-not-allowed has-[[data-slot=input-group-control]:disabled]:inset-ring-border-strong has-[[data-slot=input-group-control]:disabled]:bg-surface-disabled has-[[data-slot=input-group-control]:disabled]:text-text-subtlest",
        // Invalid
        "has-[[data-slot][aria-invalid=true]]:inset-ring-border-danger-strong has-[[data-slot][aria-invalid=true]]:ring-destructive/20 [aria-invalid=true]:ring-destructive/40 has-[[data-slot][aria-invalid=true]]:ring-3",
        // Variants
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-2 has-[>[data-align=inline-start]]:[&>input]:pl-2",
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  [
    // Base
    "flex items-center justify-center py-1.5 st-body-md text-text select-none",
    // Sizing
    "h-auto gap-2",
    // Other
    "cursor-text group-has-[[data-slot=input-group-control]:disabled]/input-group:text-text-subtlest [&>svg]:text-text-subtle [&>svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      align: {
        "inline-start":
          "order-first py-2.5 pl-2.5 group-has-[[data-slot=input-group-control][data-size=lg]]/input-group:py-3.5 group-has-[[data-slot=input-group-control][data-size=lg]]/input-group:pl-3.5 group-has-[[data-slot=input-group-control][data-size=sm]]/input-group:py-2 group-has-[[data-slot=input-group-control][data-size=sm]]/input-group:pl-2 has-[>button]:-ml-1 has-[>kbd]:ml-[-0.15rem]",
        "inline-end":
          "order-last py-2.5 pr-2.5 group-has-[[data-slot=input-group-control][data-size=lg]]/input-group:py-3.5 group-has-[[data-slot=input-group-control][data-size=lg]]/input-group:pr-3.5 group-has-[[data-slot=input-group-control][data-size=sm]]/input-group:py-2 has-[>kbd]:mr-[-0.15rem]",
        "block-start":
          "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
        "block-end":
          "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  onClick,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented) return
        // Clicks in portaled content (menus, popovers) still bubble here through the React tree
        if (!e.currentTarget.contains(e.target as Node)) return
        if ((e.target as HTMLElement).closest("button")) return
        e.currentTarget.parentElement
          ?.querySelector<HTMLElement>("[data-slot=input-group-control]")
          ?.focus()
      }}
      {...props}
    />
  )
}

function InputGroupButton({
  className,
  type = "button",
  variant = "outline",
  size = "xs",
  ...props
}: React.ComponentProps<typeof Button> & {
  type?: "button" | "submit" | "reset"
}) {
  return (
    <Button
      type={type}
      variant={variant}
      size={size}
      className={cn("shadow-none", className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        // Base
        "flex items-center st-body-md text-text-subtlest",
        // Sizing
        "gap-2",
        // Other
        "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  size = "md",
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="input-group-control"
      data-size={size}
      size={size}
      className={cn(
        // Base
        "rounded-none inset-ring-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0",
        // Sizing
        "flex-1",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        // Base
        "resize-none rounded-none inset-ring-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0",
        // Sizing
        "flex-1",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}
