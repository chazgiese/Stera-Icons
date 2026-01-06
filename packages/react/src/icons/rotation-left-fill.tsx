import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotationLeftIconFill = memo(
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
          d="M5.636 5.636A1 1 0 0 1 7.05 7.05 7.001 7.001 0 0 0 11 18.927V17a1 1 0 0 1 1.707-.707l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 11 23v-2.057a9 9 0 0 1-7.315-5.499 9 9 0 0 1 1.95-9.808M11.293.293A1 1 0 0 1 13 1v2.056a9 9 0 0 1 5.364 15.308 1 1 0 0 1-1.414-1.414A7.001 7.001 0 0 0 13 5.072V7a1 1 0 0 1-1.707.707l-3-3a1 1 0 0 1 0-1.414z"
        />
      </svg>
    ))
);
RotationLeftIconFill.displayName = "RotationLeftIconFill";
export { RotationLeftIconFill };
