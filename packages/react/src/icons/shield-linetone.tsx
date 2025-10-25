import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldIconLinetone = memo(
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
          d="M11.734 1.036c.202-.056.419-.047.617.028l8 3a1 1 0 0 1-.703 1.873l-7.649-2.869-7.648 2.869a1.001 1.001 0 0 1-.703-1.873l8-3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M20 4a1 1 0 0 1 1 1v5.584a13 13 0 0 1-7.187 11.627l-1.366.684a1 1 0 0 1-.894 0l-1.367-.684A13 13 0 0 1 3 10.584V5a1 1 0 0 1 2 0v5.584a11 11 0 0 0 6.081 9.838l.919.459.919-.46A11 11 0 0 0 19 10.585V5a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ShieldIconLinetone.displayName = "ShieldIconLinetone";
export { ShieldIconLinetone };
