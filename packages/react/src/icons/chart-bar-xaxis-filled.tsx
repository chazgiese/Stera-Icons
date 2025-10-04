import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarXaxisFilled = memo(
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
          d="M4.5 21a1.5 1.5 0 0 1-3 0V3a1.5 1.5 0 1 1 3 0zM16.5 4A1.5 1.5 0 0 1 15 5.5H7.5a1.5 1.5 0 0 1 0-3H15A1.5 1.5 0 0 1 16.5 4M22.5 9.333a1.5 1.5 0 0 1-1.5 1.5H7.5a1.5 1.5 0 0 1 0-3H21a1.5 1.5 0 0 1 1.5 1.5M14.5 14.667a1.5 1.5 0 0 1-1.5 1.5H7.5a1.5 1.5 0 0 1 0-3H13a1.5 1.5 0 0 1 1.5 1.5M18.5 20a1.5 1.5 0 0 1-1.5 1.5H7.5a1.5 1.5 0 0 1 0-3H17a1.5 1.5 0 0 1 1.5 1.5"
        />
      </svg>
    ))
);
ChartBarXaxisFilled.displayName = "ChartBarXaxisFilled";
export { ChartBarXaxisFilled };
