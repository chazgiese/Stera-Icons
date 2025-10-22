import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineChartDescIcon = memo(
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
          d="M22 19.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM2.55 3.4a.75.75 0 0 1 1.05.15l5.625 7.5 5.44-2.72a.75.75 0 0 1 .92.201l6 7.5a.75.75 0 0 1-1.17.938l-5.622-7.027-5.458 2.73a.75.75 0 0 1-.935-.222l-6-8a.75.75 0 0 1 .15-1.05"
        />
        <path
          fill="currentColor"
          d="M22 19.25a.75.75 0 1 1 0 1.5H2a.75.75 0 0 1 0-1.5zM2.55 3.4a.75.75 0 0 1 1.05.15l5.625 7.499 5.44-2.72a.75.75 0 0 1 .92.202l6 7.5a.75.75 0 0 1-1.17.938L14.792 9.94l-5.458 2.73a.75.75 0 0 1-.935-.221l-6-8a.75.75 0 0 1 .15-1.05"
        />
      </svg>
    ))
);
LineChartDescIcon.displayName = "LineChartDescIcon";
export { LineChartDescIcon };
