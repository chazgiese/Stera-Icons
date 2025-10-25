import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RectangleIconLinetone = memo(
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
          d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-6v-2h6a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-6V3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 5H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6v2H6a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h6z"
        />
      </svg>
    ))
);
RectangleIconLinetone.displayName = "RectangleIconLinetone";
export { RectangleIconLinetone };
