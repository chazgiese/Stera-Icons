import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrendDownIconLinetone = memo(
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
          d="M.793 4.293a1 1 0 0 1 1.414 0L9.5 11.586l2.793-2.793a1 1 0 0 1 1.414 0l7.793 7.793V18h-1.414L13 10.914l-2.793 2.793a1 1 0 0 1-1.34.067l-.074-.067-8-8a1 1 0 0 1 0-1.414"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M22.5 12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
TrendDownIconLinetone.displayName = "TrendDownIconLinetone";
export { TrendDownIconLinetone };
