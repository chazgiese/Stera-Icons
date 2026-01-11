import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorPointerIconDuotone = memo(
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
          d="M10 1.25A2.75 2.75 0 0 1 12.75 4v2.553a2.748 2.748 0 0 1 3.69 1.183A2.75 2.75 0 0 1 20.75 10v3.999a.75.75 0 0 1-1.5 0v-4a1.25 1.25 0 0 0-2.5 0v1.5a.75.75 0 0 1-1.5 0V9a1.25 1.25 0 0 0-2.5 0v2a.75.75 0 0 1-1.5 0V4a1.25 1.25 0 0 0-2.5 0v9a.75.75 0 0 1-1.396.38l-1.648-2.792-.004-.006a1.247 1.247 0 0 0-1.708-.458 1.25 1.25 0 0 0-.516 1.594l.059.114.048.1 1.222 3.117a.75.75 0 0 1-1.396.548l-1.21-3.09a2.747 2.747 0 0 1 4.796-2.682l.252.428V4A2.75 2.75 0 0 1 10 1.25"
        />
        <path
          fill="currentColor"
          d="M20.75 14a8.75 8.75 0 0 1-17.367 1.524l.028.073A.75.75 0 1 0 4.85 15.2a7.251 7.251 0 0 0 14.393-.827L19.25 14a.75.75 0 0 0 1.496.077z"
          opacity={0.4}
        />
      </svg>
    ))
);
CursorPointerIconDuotone.displayName = "CursorPointerIconDuotone";
export { CursorPointerIconDuotone };
