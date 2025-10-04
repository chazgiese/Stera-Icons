import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarYAxisBold = memo(
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
          d="M4 21a1 1 0 1 1-2 0V3a1 1 0 0 1 2 0zM16 4a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-2H15a1 1 0 0 1 1 1M22 9.333a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-2H21a1 1 0 0 1 1 1M14 14.667a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-2H13a1 1 0 0 1 1 1M18 20a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-2H17a1 1 0 0 1 1 1"
        />
      </svg>
    ))
);
ChartBarYAxisBold.displayName = "ChartBarYAxisBold";
export { ChartBarYAxisBold };
