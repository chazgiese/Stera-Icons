import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartLineBarIcon = memo(
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
          d="M5 17.75a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75M9 13.75a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75M13 15.5a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-1.5 0v-3.75a.75.75 0 0 1 .75-.75M17 12.75a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-1.5 0v-6.5a.75.75 0 0 1 .75-.75M21 8.5a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-1.5 0V9.25A.75.75 0 0 1 21 8.5"
        />
        <path
          fill="currentColor"
          d="M21.455 3.484a.75.75 0 0 1 1.089 1.032l-9 9.5a.75.75 0 0 1-1.075.014l-2.97-2.97-6.969 6.97a.75.75 0 1 1-1.06-1.06l7.499-7.5.114-.094a.75.75 0 0 1 .946.094l2.955 2.955z"
        />
      </svg>
    ))
);
ChartLineBarIcon.displayName = "ChartLineBarIcon";
export { ChartLineBarIcon };
