import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SlidersVertical = memo(
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
          d="M7 1.25a.75.75 0 0 1 .75.75v9.324a3.752 3.752 0 0 1 0 7.35V22a.75.75 0 0 1-1.5 0v-3.325a3.751 3.751 0 0 1 0-7.35V2A.75.75 0 0 1 7 1.25m10 0a.75.75 0 0 1 .75.75v3.324a3.752 3.752 0 0 1 0 7.35V22a.75.75 0 0 1-1.5 0v-9.325a3.751 3.751 0 0 1 0-7.35V2a.75.75 0 0 1 .75-.75M7 12.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m10-6a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        />
      </svg>
    ))
);
SlidersVertical.displayName = "SlidersVertical";
export { SlidersVertical };
