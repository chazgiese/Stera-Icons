import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineChartDesc = memo(
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
          d="M2 19.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5zM3.6 3.55a.75.75 0 0 0-1.2.9l6 8a.75.75 0 0 0 .935.221l5.458-2.73 5.621 7.028a.75.75 0 0 0 1.172-.937l-6-7.5a.75.75 0 0 0-.921-.203l-5.44 2.72z"
        />
      </svg>
    ))
);
LineChartDesc.displayName = "LineChartDesc";
export { LineChartDesc };
