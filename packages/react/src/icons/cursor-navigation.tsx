import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorNavigation = memo(
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
          d="M10.211 2.9c.738-1.473 2.842-1.474 3.579 0l8.1 16.2c.875 1.751-1.029 3.587-2.748 2.65L12 17.854 4.86 21.75c-1.72.938-3.623-.899-2.747-2.65zm2.237.671a.5.5 0 0 0-.895 0l-8.1 16.2a.5.5 0 0 0 .687.662l7.501-4.091.086-.04a.75.75 0 0 1 .633.04l7.5 4.09a.5.5 0 0 0 .687-.662z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CursorNavigation.displayName = "CursorNavigation";
export { CursorNavigation };
