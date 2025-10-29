import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SlidersVIconLinetone = memo(
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
          <path d="M8 22a1 1 0 1 1-2 0v-3.126a4 4 0 0 0 2 0zM18 22a1 1 0 1 1-2 0v-9.126a4 4 0 0 0 2 0zM7 1a1 1 0 0 1 1 1v9.126a4 4 0 0 0-2 0V2a1 1 0 0 1 1-1M17 1a1 1 0 0 1 1 1v3.126a4 4 0 0 0-2 0V2a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11 15a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M21 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SlidersVIconLinetone.displayName = "SlidersVIconLinetone";
export { SlidersVIconLinetone };
