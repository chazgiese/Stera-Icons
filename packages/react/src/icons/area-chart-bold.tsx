import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AreaChartIconBold = memo(
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
          d="M21.793 4.293A1 1 0 0 1 23.5 5v14a1 1 0 0 1-1 1h-21a1 1 0 0 1-.707-1.707l8-8 .073-.066a1 1 0 0 1 1.341.066L13 13.086zm-8.086 10.914a1 1 0 0 1-1.414 0L9.5 12.414 3.914 18H21.5V7.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AreaChartIconBold.displayName = "AreaChartIconBold";
export { AreaChartIconBold };
