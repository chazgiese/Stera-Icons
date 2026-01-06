import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowLeftIconFillDuotone = memo(
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
          d="M9 4a3 3 0 0 1 3 3v4h3.126a4 4 0 0 0 0 2H12v4a3 3 0 0 1-3 3H6v-2h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6V4z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6 8a1 1 0 0 1-1.707.707l-3-3a1 1 0 0 1 0-1.414l3-3A1 1 0 0 1 6 2zM6 22a1 1 0 0 1-1.707.707l-3-3a1 1 0 0 1 0-1.414l3-3A1 1 0 0 1 6 16zM23 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
        />
      </svg>
    ))
);
FlowSplitArrowLeftIconFillDuotone.displayName =
  "FlowSplitArrowLeftIconFillDuotone";
export { FlowSplitArrowLeftIconFillDuotone };
