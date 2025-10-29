import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckIconLinetone = memo(
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
          <path d="M3.427 10.323a1 1 0 0 1 1.392.246l4.092 5.845-.843.903a1 1 0 0 0-.095 1.245L3.18 11.717a1 1 0 0 1 .246-1.393" />
        </g>
        <path
          fill="currentColor"
          d="M19.268 5.317a1 1 0 0 1 1.462 1.366l-11.2 12a1.001 1.001 0 0 1-1.462-1.366z"
        />
      </svg>
    ))
);
CheckIconLinetone.displayName = "CheckIconLinetone";
export { CheckIconLinetone };
