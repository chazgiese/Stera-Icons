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
          d="M12.814 3.038a8.1 8.1 0 0 1 2.548.158q.046.01.093.016l.042.004a1 1 0 0 0 .198-.004l.025-.003q.075-.01.148-.032l.013-.004q.072-.023.14-.056c-3.195 1.673-4.968 5.54-3.993 9.339s4.357 6.2 7.908 5.972q.038-.002.044 0a1 1 0 0 0-.666.271 9 9 0 0 1-.345.305 8.5 8.5 0 0 1-1.773 1.156c-3.358-.844-6.16-3.525-7.105-7.207-.944-3.677.193-7.443 2.686-9.912z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.833 1.38a10.16 10.16 0 0 1 4.966-.136 1 1 0 0 1-.436 1.952 8.15 8.15 0 0 0-3.99.11C6.816 4.58 4.054 9.5 5.296 14.34c1.24 4.825 5.96 7.623 10.496 6.354a8.4 8.4 0 0 0 3.52-1.994 1 1 0 0 1 1.372 1.456 10.4 10.4 0 0 1-4.354 2.465C10.646 24.21 4.86 20.677 3.36 14.836 1.864 9.009 5.167 2.964 10.833 1.38"
        />
      </svg>
    ))
);
MoonCrescentIconLinetone.displayName = "MoonCrescentIconLinetone";
export { MoonCrescentIconLinetone };
