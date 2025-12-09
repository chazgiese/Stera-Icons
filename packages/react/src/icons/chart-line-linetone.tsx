import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartLineIconLinetone = memo(
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
          d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M20.2 3.4a1 1 0 0 1 1.6 1.2l-6 8a1 1 0 0 1-1.248.295l-5.277-2.639-5.494 6.87a1.001 1.001 0 0 1-1.563-1.25l6-7.5a1 1 0 0 1 1.229-.27l5.254 2.627z"
        />
      </svg>
    ))
);
ChartLineIconLinetone.displayName = "ChartLineIconLinetone";
export { ChartLineIconLinetone };
