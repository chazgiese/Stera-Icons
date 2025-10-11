import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SlidersHorizontalIcon = memo(
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
          fillRule="evenodd"
          d="M15 13.25a3.75 3.75 0 0 1 3.675 3H22a.75.75 0 0 1 0 1.5h-3.325a3.751 3.751 0 0 1-7.35 0H2a.75.75 0 0 1 0-1.5h9.325c.348-1.712 1.86-3 3.675-3m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M9 3.25a3.75 3.75 0 0 1 3.675 3H22a.75.75 0 0 1 0 1.5h-9.325a3.751 3.751 0 0 1-7.35 0H2a.75.75 0 0 1 0-1.5h3.325c.348-1.712 1.86-3 3.675-3m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SlidersHorizontalIcon.displayName = "SlidersHorizontalIcon";
export { SlidersHorizontalIcon };
