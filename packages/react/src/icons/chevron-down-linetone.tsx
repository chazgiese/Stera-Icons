import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronDownIconLinetone = memo(
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
          d="M4.293 8.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.293 8.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414-1.414z"
        />
      </svg>
    ))
);
ChevronDownIconLinetone.displayName = "ChevronDownIconLinetone";
export { ChevronDownIconLinetone };
