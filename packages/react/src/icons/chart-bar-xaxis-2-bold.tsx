import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarXaxis2Bold = memo(
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
          d="M21 20a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM4 8a1 1 0 0 1 1 1v8.5a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1M9.333 2a1 1 0 0 1 1 1v14.5a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1M14.667 10a1 1 0 0 1 1 1v6.5a1 1 0 0 1-2 0V11a1 1 0 0 1 1-1M20 6a1 1 0 0 1 1 1v10.5a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ChartBarXaxis2Bold.displayName = "ChartBarXaxis2Bold";
export { ChartBarXaxis2Bold };
