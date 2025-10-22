import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const OptionKeyIconLinetone = memo(
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
          d="M9 3a1 1 0 0 1 .937.648L15.693 19H22a1 1 0 1 1 0 2h-7a1 1 0 0 1-.937-.648L8.308 5H2a1 1 0 0 1 0-2z"
        />
        <path
          fill="currentColor"
          d="M22 3a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z"
          opacity={0.32}
        />
      </svg>
    ))
);
OptionKeyIconLinetone.displayName = "OptionKeyIconLinetone";
export { OptionKeyIconLinetone };
