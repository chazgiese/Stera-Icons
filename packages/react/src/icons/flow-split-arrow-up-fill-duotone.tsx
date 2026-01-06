import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowUpIconFillDuotone = memo(
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
          d="M6 9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6h2v3a3 3 0 0 1-3 3h-4v3.126a4 4 0 0 0-2 0V12H7a3 3 0 0 1-3-3V6h2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M8 6a1 1 0 0 0 .707-1.707l-3-3a1 1 0 0 0-1.414 0l-3 3A1 1 0 0 0 2 6zM22 6a1 1 0 0 0 .707-1.707l-3-3a1 1 0 0 0-1.414 0l-3 3A1 1 0 0 0 16 6zM12 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
        />
      </svg>
    ))
);
FlowSplitArrowUpIconFillDuotone.displayName = "FlowSplitArrowUpIconFillDuotone";
export { FlowSplitArrowUpIconFillDuotone };
