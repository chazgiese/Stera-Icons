import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToyBrickIconFillDuotone = memo(
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
          d="M18 8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.5 4.75c.966 0 1.75.784 1.75 1.75V8H6c-.446 0-.87.1-1.25.274V6.5c0-.966.784-1.75 1.75-1.75zM17.5 4.75c.966 0 1.75.784 1.75 1.75v1.774A3 3 0 0 0 18 8h-5.25V6.5c0-.966.784-1.75 1.75-1.75z"
        />
      </svg>
    ))
);
ToyBrickIconFillDuotone.displayName = "ToyBrickIconFillDuotone";
export { ToyBrickIconFillDuotone };
