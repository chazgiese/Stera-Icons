import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StarHalfIconDuotone = memo(
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
          d="M12 1.252c.46 0 .92.23 1.164.696l.046.096 2.37 5.484 5.973.552c1.147.106 1.62 1.534.747 2.299l-4.503 3.94 1.317 5.825c.256 1.133-.97 2.004-1.957 1.42L12 18.515v-1.527c.174 0 .348.033.512.102l.16.08 4.885 2.889-1.248-5.515a1.32 1.32 0 0 1 .417-1.28l4.26-3.729-5.65-.521a1.32 1.32 0 0 1-1.088-.79L12 3.028z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M4.886 20.144c-.257 1.133.97 2.004 1.957 1.42L12 18.515V1.25c-.48 0-.981.264-1.21.794L8.419 7.528l-5.972.552C1.3 8.186.827 9.614 1.7 10.38l4.502 3.94z"
        />
      </svg>
    ))
);
StarHalfIconDuotone.displayName = "StarHalfIconDuotone";
export { StarHalfIconDuotone };
