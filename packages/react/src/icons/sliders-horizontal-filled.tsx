import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SlidersHorizontalFilled = memo(
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
          d="M15 13a4 4 0 0 1 3.874 3H22a1 1 0 1 1 0 2h-3.126a4.002 4.002 0 0 1-7.748 0H2a1 1 0 1 1 0-2h9.126c.444-1.725 2.01-3 3.874-3M9 3a4 4 0 0 1 3.874 3H22a1 1 0 1 1 0 2h-9.126a4.002 4.002 0 0 1-7.748 0H2a1 1 0 0 1 0-2h3.126C5.57 4.275 7.136 3 9 3"
        />
      </svg>
    ))
);
SlidersHorizontalFilled.displayName = "SlidersHorizontalFilled";
export { SlidersHorizontalFilled };
