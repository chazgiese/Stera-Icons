import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarXAxis = memo(
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
          d="M21 20.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM4 8.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 4 8.25M9.333 2.25a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M14.667 10.25a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 .75-.75M20 6.25a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
ChartBarXAxis.displayName = "ChartBarXAxis";
export { ChartBarXAxis };
