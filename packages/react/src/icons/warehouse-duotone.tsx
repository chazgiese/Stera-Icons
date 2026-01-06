import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WarehouseIconDuotone = memo(
  forwardRef < SVGSVGElement,
  IconProps >
    ((
      {
        size = 24,
        color = "currentColor",
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      },
      ref
    ) => (
      <svg
        fill={color}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        ref={ref}
        {...props}
      >
        <path
          fill="currentColor"
          d="M10.77 2.776a2.75 2.75 0 0 1 2.46 0l8 4a2.75 2.75 0 0 1 1.52 2.46V18A2.75 2.75 0 0 1 20 20.75h-2.25v-1.5H20c.69 0 1.25-.56 1.25-1.25V9.236c0-.473-.268-.906-.691-1.118l-8-4a1.25 1.25 0 0 0-1.118 0l-8 4a1.25 1.25 0 0 0-.691 1.118V18c0 .69.56 1.25 1.25 1.25h2.25v1.5H4A2.75 2.75 0 0 1 1.25 18V9.236a2.75 2.75 0 0 1 1.52-2.46z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.75 10.25a2 2 0 0 1 2 2v8.5H6.25v-8.5a2 2 0 0 1 2-2zm-8 7.5v1.5h8.5v-1.5zm0-1.5h8.5v-1.5h-8.5zm.5-4.5a.5.5 0 0 0-.5.5v1h8.5v-1a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WarehouseIconDuotone.displayName = "WarehouseIconDuotone";
export { WarehouseIconDuotone };
