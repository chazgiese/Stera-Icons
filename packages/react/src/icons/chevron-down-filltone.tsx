import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronDownIconFilltone = memo(
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
          opacity={0.32}
        />
        <path fill="currentColor" d="M19 8a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2z" />
      </svg>
    ))
);
ChevronDownIconFilltone.displayName = "ChevronDownIconFilltone";
export { ChevronDownIconFilltone };
