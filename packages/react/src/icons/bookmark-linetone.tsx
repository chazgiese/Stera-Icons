import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BookmarkIconLinetone = memo(
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
          d="M16 1a5 5 0 0 1 5 5v16a1 1 0 1 1-2 0V6a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v16a1 1 0 1 1-2 0V6a5 5 0 0 1 5-5z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M9.402 16.072a4 4 0 0 1 5.196 0l6.051 5.169a1 1 0 0 1-1.298 1.52l-6.052-5.169a2 2 0 0 0-2.598 0l-6.051 5.17a1.001 1.001 0 0 1-1.3-1.521z"
        />
      </svg>
    ))
);
BookmarkIconLinetone.displayName = "BookmarkIconLinetone";
export { BookmarkIconLinetone };
