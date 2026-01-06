import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WarehouseIconFill = memo(
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
          fillRule="evenodd"
          d="M10.77 2.776a2.75 2.75 0 0 1 2.46 0l8 4a2.75 2.75 0 0 1 1.52 2.46V18A2.75 2.75 0 0 1 20 20.75H4A2.75 2.75 0 0 1 1.25 18V9.236c0-1.041.589-1.994 1.52-2.46zM7.75 19.25h8.5v-1.5h-8.5zm0-3h8.5v-1.5h-8.5zm.5-4.5a.5.5 0 0 0-.5.5v1h8.5v-1a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WarehouseIconFill.displayName = "WarehouseIconFill";
export { WarehouseIconFill };
