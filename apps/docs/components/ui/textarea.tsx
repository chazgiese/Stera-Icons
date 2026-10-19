import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // Base
        "flex rounded-xl inset-ring inset-ring-border bg-transparent px-3 py-2.5 st-body-md",
        // Sizing
        "min-h-16 w-full",
        // Variants
        "md:text-sm",
        // Other
        "aria-invalid:inset-ring-border-danger-strong field-sizing-content transition-[color,box-shadow] outline-none placeholder:text-text-subtle focus-visible:inset-ring-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 aria-invalid:ring-ring-danger",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
