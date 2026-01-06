import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerUpRightIconFillDuotone = memo(
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
          d="M3 21a1 1 0 0 1-1-1v-8a4 4 0 0 1 4-4h9v2H6a2 2 0 0 0-2 2v8a1 1 0 0 1-1 1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.707 14.707A1 1 0 0 1 15 14V4a1 1 0 0 1 1.707-.707l5 5 .066.073a1 1 0 0 1-.066 1.341z"
        />
      </svg>
    ))
);
ArrowCornerUpRightIconFillDuotone.displayName =
  "ArrowCornerUpRightIconFillDuotone";
export { ArrowCornerUpRightIconFillDuotone };
