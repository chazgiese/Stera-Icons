import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HashIconLinetone = memo(
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
          <path d="M10 21a1 1 0 1 1-2 0v-5h2zM16 21a1 1 0 1 1-2 0v-5h2zM10 14H8v-4h2zM16 14h-2v-4h2zM9 2a1 1 0 0 1 1 1v5H8V3a1 1 0 0 1 1-1M15 2a1 1 0 0 1 1 1v5h-2V3a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          d="M21 14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 8a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
HashIconLinetone.displayName = "HashIconLinetone";
export { HashIconLinetone };
