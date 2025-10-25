import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WaveSquareIconLinetone = memo(
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
          d="M22 11a1 1 0 0 1 1 1v6.75A2.25 2.25 0 0 1 20.75 21h-7.5A2.25 2.25 0 0 1 11 18.75V12h2v6.75c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25V12a1 1 0 0 1 1-1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.75 3A2.25 2.25 0 0 1 13 5.25V12h-2V5.25a.25.25 0 0 0-.25-.25h-7.5a.25.25 0 0 0-.25.25V12a1 1 0 0 1-2 0V5.25A2.25 2.25 0 0 1 3.25 3z"
        />
      </svg>
    ))
);
WaveSquareIconLinetone.displayName = "WaveSquareIconLinetone";
export { WaveSquareIconLinetone };
