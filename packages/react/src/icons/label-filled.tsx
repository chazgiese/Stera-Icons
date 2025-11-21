import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LabelIconFilled = memo(
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
          d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8.217a5 5 0 0 1-4.24-2.35L.813 13.59a3 3 0 0 1 0-3.18l3.162-5.06A5 5 0 0 1 8.216 3z"
        />
      </svg>
    ))
);
LabelIconFilled.displayName = "LabelIconFilled";
export { LabelIconFilled };
