import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StairsIconLinetone = memo(
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
          <path d="M3.5 15.833a1 1 0 0 1 1 1V22.5a1 1 0 1 1-2 0v-5.667a1 1 0 0 1 1-1M10.167 9.167a1 1 0 0 1 1 1v6.666a1 1 0 0 1-2 0v-6.666a1 1 0 0 1 1-1M16.833 2.5a1 1 0 0 1 1 1v6.667a1 1 0 0 1-2 0V3.5a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          d="M10.167 15.832a1 1 0 0 1 0 2H3.5a1 1 0 1 1 0-2zM16.834 9.168a1 1 0 0 1 0 2h-6.667a1 1 0 1 1 0-2zM22.5 2.5a1 1 0 0 1 0 2h-5.667a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
StairsIconLinetone.displayName = "StairsIconLinetone";
export { StairsIconLinetone };
