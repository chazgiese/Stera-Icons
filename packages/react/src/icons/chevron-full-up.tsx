import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullUp = memo(
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
          fillRule="evenodd"
          d="M11.47 7.47a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1-.53 1.28H5a.751.751 0 0 1-.53-1.28zm-4.66 6.78h10.38L12 9.06z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChevronFullUp.displayName = "ChevronFullUp";
export { ChevronFullUp };
