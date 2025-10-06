import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineChart = memo(
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
          d="M22 19.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM20.4 3.55a.75.75 0 0 1 1.2.9l-6 8a.75.75 0 0 1-.935.221l-5.458-2.73-5.621 7.028a.75.75 0 0 1-1.172-.937l6-7.5a.75.75 0 0 1 .921-.203l5.44 2.72z"
        />
      </svg>
    ))
);
LineChart.displayName = "LineChart";
export { LineChart };
