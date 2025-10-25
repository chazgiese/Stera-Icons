import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WaveSquareIconFilltone = memo(
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
          d="M22 10.5a1.5 1.5 0 0 1 1.5 1.5v6.75a2.75 2.75 0 0 1-2.75 2.75h-7.5a2.75 2.75 0 0 1-2.75-2.75V12h3v6.5h7V12a1.5 1.5 0 0 1 1.5-1.5"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.75 2.5a2.75 2.75 0 0 1 2.75 2.75V12h-3V5.5h-7V12a1.5 1.5 0 0 1-3 0V5.25A2.75 2.75 0 0 1 3.25 2.5z"
        />
      </svg>
    ))
);
WaveSquareIconFilltone.displayName = "WaveSquareIconFilltone";
export { WaveSquareIconFilltone };
