import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListTreeIcon = memo(
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
          d="M3 4.25a.75.75 0 0 1 .75.75v4A2.25 2.25 0 0 0 6 11.25h2a.75.75 0 0 1 0 1.5H6c-.844 0-1.623-.28-2.25-.75v4A2.25 2.25 0 0 0 6 18.25h2a.75.75 0 0 1 0 1.5H6A3.75 3.75 0 0 1 2.25 16V5A.75.75 0 0 1 3 4.25M21 18.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5zM21 11.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5zM21 4.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ListTreeIcon.displayName = "ListTreeIcon";
export { ListTreeIcon };
