import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarXaxis = memo(
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
          d="M3.75 21a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 1.5 0zM15.75 4a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75M21.75 9.333a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h15a.75.75 0 0 1 .75.75M13.75 14.667a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h7a.75.75 0 0 1 .75.75M17.75 20a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 .75.75"
        />
      </svg>
    ))
);
ChartBarXaxis.displayName = "ChartBarXaxis";
export { ChartBarXaxis };
