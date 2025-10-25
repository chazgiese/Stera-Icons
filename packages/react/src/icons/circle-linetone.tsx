import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleIconLinetone = memo(
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
          d="M3 12a9 9 0 1 0 18 0h2c0 6.075-4.925 11-11 11S1 18.075 1 12z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 1c6.075 0 11 4.925 11 11h-2a9 9 0 1 0-18 0H1C1 5.925 5.925 1 12 1"
        />
      </svg>
    ))
);
CircleIconLinetone.displayName = "CircleIconLinetone";
export { CircleIconLinetone };
