import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StairsIconFilltone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M3.5 15.333a1.5 1.5 0 0 1 1.5 1.5V22.5a1.5 1.5 0 0 1-3 0v-5.667a1.5 1.5 0 0 1 1.5-1.5M10.167 8.667a1.5 1.5 0 0 1 1.5 1.5v6.666a1.5 1.5 0 0 1-3 0v-6.666a1.5 1.5 0 0 1 1.5-1.5M16.833 2a1.5 1.5 0 0 1 1.5 1.5v6.667a1.5 1.5 0 0 1-3 0V3.5a1.5 1.5 0 0 1 1.5-1.5" />
        </g>
        <path
          fill="currentColor"
          d="M10.167 15.332a1.5 1.5 0 0 1 0 3H3.5a1.5 1.5 0 1 1 0-3zM16.834 8.668a1.5 1.5 0 0 1 0 3h-6.667a1.5 1.5 0 0 1 0-3zM22.5 2a1.5 1.5 0 0 1 0 3h-5.667a1.5 1.5 0 0 1 0-3z"
        />
      </svg>
    ))
);
StairsIconFilltone.displayName = "StairsIconFilltone";
export { StairsIconFilltone };
