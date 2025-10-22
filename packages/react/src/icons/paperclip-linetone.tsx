import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PaperclipIconLinetone = memo(
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
          d="M10 1a5 5 0 0 1 5 5v9a3 3 0 1 1-6 0V8a1 1 0 0 1 2 0v7a1 1 0 1 0 2 0V6a3 3 0 0 0-3-3z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M10 3a3 3 0 0 0-3 3v10a5 5 0 0 0 10 0V8a1 1 0 1 1 2 0v8a7 7 0 1 1-14 0V6a5 5 0 0 1 5-5z"
        />
      </svg>
    ))
);
PaperclipIconLinetone.displayName = "PaperclipIconLinetone";
export { PaperclipIconLinetone };
