import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotateLeftIconLinetone = memo(
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
          d="M12 4a9 9 0 1 1-9 9 1 1 0 1 1 2 0 7 7 0 1 0 7-7H8a1 1 0 0 1 0-2z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M10.293.293a1 1 0 1 1 1.414 1.414L8.414 5l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414z"
        />
      </svg>
    ))
);
RotateLeftIconLinetone.displayName = "RotateLeftIconLinetone";
export { RotateLeftIconLinetone };
