import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorTextAltIconLinetone = memo(
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
          d="M8 1a5 5 0 0 1 5 5v5h2a1 1 0 1 1 0 2h-2v5a3 3 0 0 0 3 3h1a1 1 0 1 1 0 2h-1a5 5 0 0 1-5-5v-5H9a1 1 0 1 1 0-2h2V6a3 3 0 0 0-3-3H7a1 1 0 0 1 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M17 1a1 1 0 1 1 0 2h-1a3 3 0 0 0-3 3v12a5 5 0 0 1-5 5H7a1 1 0 1 1 0-2h1a3 3 0 0 0 3-3V6a5 5 0 0 1 5-5z"
        />
      </svg>
    ))
);
CursorTextAltIconLinetone.displayName = "CursorTextAltIconLinetone";
export { CursorTextAltIconLinetone };
