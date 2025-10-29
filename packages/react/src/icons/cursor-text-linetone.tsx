import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorTextIconLinetone = memo(
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
          <path d="M13 18a3 3 0 0 0 3 3h1a1 1 0 1 1 0 2h-1a5 5 0 0 1-4-2.001c.627-.836 1-1.874 1-2.999M8 1c1.636 0 3.088.786 4 2-.628.836-1 1.874-1 3a3 3 0 0 0-3-3H7a1 1 0 0 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M17 1a1 1 0 1 1 0 2h-1a3 3 0 0 0-3 3v12a5 5 0 0 1-5 5H7a1 1 0 1 1 0-2h1a3 3 0 0 0 3-3V6a5 5 0 0 1 5-5z"
        />
      </svg>
    ))
);
CursorTextIconLinetone.displayName = "CursorTextIconLinetone";
export { CursorTextIconLinetone };
