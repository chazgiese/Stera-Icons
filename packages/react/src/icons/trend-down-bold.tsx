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
          d="M.793 4.293a1 1 0 0 1 1.414 0L9.5 11.586l2.793-2.793a1 1 0 0 1 1.414 0l7.793 7.793V13a1 1 0 1 1 2 0v6q-.001.125-.031.24l-.013.05-.012.038a1 1 0 0 1-.534.582l-.025.012-.057.021q-.018.008-.037.013l-.05.013-.047.011-.022.003Q22.588 20 22.5 20h-6a1 1 0 1 1 0-2h3.586L13 10.914l-2.793 2.793a1 1 0 0 1-1.34.066l-.074-.066-8-8a1 1 0 0 1 0-1.414"
        />
        <path
          fill="currentColor"
          d="M.793 4.293a1 1 0 0 1 1.414 0L9.5 11.586l2.793-2.793a1 1 0 0 1 1.414 0l7.793 7.793V13a1 1 0 0 1 2 0v6a1 1 0 0 1-.031.24l-.013.05-.013.038a1 1 0 0 1-.39.503 1 1 0 0 1-.143.08l-.025.01-.057.022q-.018.008-.037.013l-.05.013-.048.011-.021.003Q22.588 20 22.5 20h-6a1 1 0 0 1 0-2h3.586L13 10.914l-2.793 2.793a1 1 0 0 1-1.34.066l-.074-.066-8-8a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
TrendDownIconBold.displayName = "TrendDownIconBold";
export { TrendDownIconBold };
