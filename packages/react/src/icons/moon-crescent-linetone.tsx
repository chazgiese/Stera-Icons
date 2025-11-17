import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoonCrescentIconLinetone = memo(
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
          d="M12.813 3.038a8.1 8.1 0 0 1 2.55.158q.045.01.092.016l.042.004a1 1 0 0 0 .198-.004l.025-.003a1 1 0 0 0 .3-.092c-3.194 1.673-4.967 5.54-3.992 9.339.976 3.8 4.357 6.2 7.907 5.972q.038-.002.044 0a1 1 0 0 0-.666.271 9 9 0 0 1-.344.305 8.5 8.5 0 0 1-1.773 1.156c-3.358-.844-6.16-3.525-7.105-7.207-.944-3.677.193-7.443 2.686-9.912z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.834 1.38a10.16 10.16 0 0 1 4.966-.136 1 1 0 0 1-.437 1.952 8.15 8.15 0 0 0-3.99.11C6.818 4.58 4.055 9.5 5.298 14.34c1.239 4.825 5.959 7.623 10.496 6.354a8.4 8.4 0 0 0 3.52-1.994 1 1 0 0 1 1.371 1.456 10.4 10.4 0 0 1-4.353 2.465C10.647 24.21 4.86 20.677 3.36 14.836 1.864 9.009 5.167 2.964 10.834 1.38"
        />
      </svg>
    ))
);
MoonCrescentIconLinetone.displayName = "MoonCrescentIconLinetone";
export { MoonCrescentIconLinetone };
