import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SlidersVIconFilltone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M8 12a1 1 0 1 1-2 0V2a1 1 0 0 1 2 0zM8 22a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0zM18 6a1 1 0 1 1-2 0V2a1 1 0 1 1 2 0zM18 22a1 1 0 1 1-2 0V12a1 1 0 1 1 2 0z" />
        </g>
        <path
          fill="currentColor"
          d="M11 15a4 4 0 1 1-8 0 4 4 0 0 1 8 0M21 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
        />
      </svg>
    ))
);
SlidersVIconFilltone.displayName = "SlidersVIconFilltone";
export { SlidersVIconFilltone };
