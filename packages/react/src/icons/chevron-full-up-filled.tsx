import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullUpIconFilled = memo(
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
          d="M11.293 7.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 19 16H5a1 1 0 0 1-.707-1.707z"
        />
      </svg>
    ))
);
ChevronFullUpIconFilled.displayName = "ChevronFullUpIconFilled";
export { ChevronFullUpIconFilled };
