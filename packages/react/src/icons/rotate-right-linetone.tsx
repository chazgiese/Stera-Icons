import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotateRightIconLinetone = memo(
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
          d="M12 4a9 9 0 1 0 9 9 1 1 0 1 0-2 0 7 7 0 1 1-7-7h4a1 1 0 1 0 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.707.293a1 1 0 1 0-1.414 1.414L15.586 5l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414z"
        />
      </svg>
    ))
);
RotateRightIconLinetone.displayName = "RotateRightIconLinetone";
export { RotateRightIconLinetone };
