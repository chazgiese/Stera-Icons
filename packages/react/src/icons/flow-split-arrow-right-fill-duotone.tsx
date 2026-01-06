import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowRightIconFillDuotone = memo(
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
          d="M18 4v2h-3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v2h-3a3 3 0 0 1-3-3v-4H8.874a4 4 0 0 0 0-2H12V7a3 3 0 0 1 3-3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18 8a1 1 0 0 0 1.707.707l3-3a1 1 0 0 0 0-1.414l-3-3A1 1 0 0 0 18 2zM18 22a1 1 0 0 0 1.707.707l3-3a1 1 0 0 0 0-1.414l-3-3A1 1 0 0 0 18 16zM1 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0"
        />
      </svg>
    ))
);
FlowSplitArrowRightIconFillDuotone.displayName =
  "FlowSplitArrowRightIconFillDuotone";
export { FlowSplitArrowRightIconFillDuotone };
