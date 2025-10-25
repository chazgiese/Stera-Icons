import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullDownIconFilltone = memo(
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
          d="M19 8a1 1 0 0 1 .707 1.707l-7 7a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 5 8z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.293 8.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L12 14.586z"
        />
      </svg>
    ))
);
ChevronFullDownIconFilltone.displayName = "ChevronFullDownIconFilltone";
export { ChevronFullDownIconFilltone };
