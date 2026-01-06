import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FigmaIconFill = memo(
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
          d="M11.45 19.334a3.117 3.117 0 1 1-3.116-3.117h3.116zM8.334 8.884h3.116v6.232H8.334a3.117 3.117 0 0 1-.018-6.233zM15.687 8.883a3.117 3.117 0 1 1-.05 0h.05M11.45 7.783H8.334a3.117 3.117 0 1 1 0-6.233h3.116zM15.67 1.55a3.117 3.117 0 0 1 0 6.233h-3.117V1.55z"
        />
      </svg>
    ))
);
FigmaIconFill.displayName = "FigmaIconFill";
export { FigmaIconFill };
