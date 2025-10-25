import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlashIconLinetone = memo(
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
          d="M15.715 1.25a1 1 0 1 1 1.32 1.501L6.95 11.616l3.627 1.257a1 1 0 0 1 .625 1.251l-2.625 8.182a1 1 0 0 1-1.904-.612l2.326-7.252-4.326-1.497a1.002 1.002 0 0 1-.333-1.696z"
        />
        <path
          fill="currentColor"
          d="M15.423 1.694a1 1 0 0 1 1.904.611L15 9.556l4.327 1.498a1.002 1.002 0 0 1 .333 1.697l-11.375 10a1 1 0 1 1-1.32-1.502l10.084-8.866-3.626-1.256a1 1 0 0 1-.625-1.251z"
          opacity={0.4}
        />
      </svg>
    ))
);
FlashIconLinetone.displayName = "FlashIconLinetone";
export { FlashIconLinetone };
