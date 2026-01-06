import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToyBrickIconFill = memo(
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
          d="M9.5 4.75c.966 0 1.75.784 1.75 1.75V8h1.5V6.5c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v1.774A3 3 0 0 1 21 11v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6c0-1.21.718-2.251 1.75-2.726V6.5c0-.966.784-1.75 1.75-1.75z"
        />
      </svg>
    ))
);
ToyBrickIconFill.displayName = "ToyBrickIconFill";
export { ToyBrickIconFill };
