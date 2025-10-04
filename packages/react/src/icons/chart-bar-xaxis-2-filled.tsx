import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarXaxis2Filled = memo(
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
          d="M21 19.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM4 7.5A1.5 1.5 0 0 1 5.5 9v7.5a1.5 1.5 0 0 1-3 0V9A1.5 1.5 0 0 1 4 7.5M9.333 1.5a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-3 0V3a1.5 1.5 0 0 1 1.5-1.5M14.667 9.5a1.5 1.5 0 0 1 1.5 1.5v5.5a1.5 1.5 0 0 1-3 0V11a1.5 1.5 0 0 1 1.5-1.5M20 5.5A1.5 1.5 0 0 1 21.5 7v9.5a1.5 1.5 0 0 1-3 0V7A1.5 1.5 0 0 1 20 5.5"
        />
      </svg>
    ))
);
ChartBarXaxis2Filled.displayName = "ChartBarXaxis2Filled";
export { ChartBarXaxis2Filled };
