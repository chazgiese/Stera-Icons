import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparklesAltIconFillDuotone = memo(
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
          d="M16.5 1a1 1 0 0 1 .977.783 6.24 6.24 0 0 0 4.74 4.74 1 1 0 0 1 0 1.954 6.24 6.24 0 0 0-4.74 4.74 1 1 0 0 1-1.954 0 6.24 6.24 0 0 0-4.74-4.74 1 1 0 0 1 0-1.954 6.24 6.24 0 0 0 4.74-4.74A1 1 0 0 1 16.5 1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.5 10a1 1 0 0 1 .977.783 6.24 6.24 0 0 0 4.74 4.74 1 1 0 0 1 0 1.954 6.24 6.24 0 0 0-4.74 4.74 1 1 0 0 1-1.954 0 6.24 6.24 0 0 0-4.74-4.74 1 1 0 0 1 0-1.954 6.24 6.24 0 0 0 4.74-4.74A1 1 0 0 1 7.5 10"
        />
      </svg>
    ))
);
SparklesAltIconFillDuotone.displayName = "SparklesAltIconFillDuotone";
export { SparklesAltIconFillDuotone };
