import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FrameIconLinetone = memo(
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
          d="M16.5 6.5a1 1 0 0 0 1 1h1v9h-1a1 1 0 0 0-1 1v1h-9v-1a1 1 0 0 0-1-1h-1v-9h1a1 1 0 0 0 1-1v-1h9zm-9 10h9v-9h-9z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6.5 16.5a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-2.5H3a1 1 0 1 1 0-2zM21 16.5a1 1 0 1 1 0 2h-2.5V21a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1zM6.5 2a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h2.5V3a1 1 0 0 1 1-1M17.5 2a1 1 0 0 1 1 1v2.5H21a1 1 0 1 1 0 2h-3.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
FrameIconLinetone.displayName = "FrameIconLinetone";
export { FrameIconLinetone };
