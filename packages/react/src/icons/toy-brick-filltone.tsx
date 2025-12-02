import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToyBrickIconFilltone = memo(
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
          d="M19 7a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-2.996-2.846L2 18v-8a3 3 0 0 1 3-3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.25 3.5c.966 0 1.75.784 1.75 1.75V7H5V5.25c0-.966.784-1.75 1.75-1.75zM17.25 3.5c.966 0 1.75.784 1.75 1.75V7h-6V5.25c0-.966.784-1.75 1.75-1.75z"
        />
      </svg>
    ))
);
ToyBrickIconFilltone.displayName = "ToyBrickIconFilltone";
export { ToyBrickIconFilltone };
