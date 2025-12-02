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
        <g fill="currentColor" opacity={0.4}>
          <path d="M2 16.832a1.5 1.5 0 0 0 1.5 1.5H5V22.5a1.5 1.5 0 0 1-3 0zM10.187 8.668h-.02a1.5 1.5 0 1 0 0 3h1.5v5.165a1.5 1.5 0 0 1-1.5 1.5l-.02-.001.02.001a1.5 1.5 0 0 0 0-3.001h-1.5v-5.164a1.5 1.5 0 0 1 1.5-1.5zM15.333 3.5a1.5 1.5 0 0 0 1.5 1.5h1.5v5.148a1.5 1.5 0 0 0-1.499-1.48h-1.501z" />
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
