import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SlashIconLinetone = memo(
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
          d="m12.748 12.664-8 9a1 1 0 1 1-1.494-1.328l8-9z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M19.253 2.336a1 1 0 1 1 1.494 1.328l-8 9-1.494-1.328z"
        />
      </svg>
    ))
);
SlashIconLinetone.displayName = "SlashIconLinetone";
export { SlashIconLinetone };
