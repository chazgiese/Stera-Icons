import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckSourceIconLinetone = memo(
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
          d="M3.427 10.323a1 1 0 0 1 1.392.246l4.8 6.857a1.001 1.001 0 0 1-1.639 1.147l-4.8-6.857a1 1 0 0 1 .247-1.393"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M19.268 5.317a1 1 0 0 1 1.462 1.366l-11.199 12a1.001 1.001 0 0 1-1.463-1.366z"
        />
      </svg>
    ))
);
CheckSourceIconLinetone.displayName = "CheckSourceIconLinetone";
export { CheckSourceIconLinetone };
