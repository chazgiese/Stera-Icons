import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LabelAltIconLinetone = memo(
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
          d="M20.745 3c1.767 0 2.844 1.944 1.907 3.442l-3.141 5.028a1 1 0 0 0 0 1.06l3.141 5.028c.937 1.498-.14 3.442-1.907 3.442H9v-2h11.745a.25.25 0 0 0 .212-.383l-3.143-5.027a3 3 0 0 1 0-3.18l3.143-5.027A.25.25 0 0 0 20.745 5H9V3z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M9 3a1 1 0 0 1 0 2h-.783a3 3 0 0 0-2.544 1.41l-3.162 5.06a1 1 0 0 0 0 1.06l3.162 5.06A3 3 0 0 0 8.217 19H9a1 1 0 0 1 0 2h-.783a5 5 0 0 1-4.24-2.35L.815 13.59a3 3 0 0 1 0-3.18l3.162-5.06A5 5 0 0 1 8.217 3z"
        />
      </svg>
    ))
);
LabelAltIconLinetone.displayName = "LabelAltIconLinetone";
export { LabelAltIconLinetone };
