import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrendDownIconBold = memo(
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
          d="M.793 4.293a1 1 0 0 1 1.414 0L9.5 11.586l2.793-2.793a1 1 0 0 1 1.414 0l7.793 7.793V13a1 1 0 1 1 2 0v6a1 1 0 0 1-.031.24l-.013.051-.012.037a1 1 0 0 1-.534.582l-.025.012-.057.021q-.018.008-.037.013l-.05.013-.047.012q-.012 0-.022.003-.084.015-.172.016h-6a1 1 0 0 1 0-2h3.586L13 10.914l-2.793 2.793a1 1 0 0 1-1.34.067l-.074-.067-8-8a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
TrendDownIconBold.displayName = "TrendDownIconBold";
export { TrendDownIconBold };
