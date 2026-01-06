import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartLineDescIconDuotone = memo(
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
          d="M22 19.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M2.55 3.4a.75.75 0 0 1 1.05.15l5.625 7.499 5.44-2.72a.75.75 0 0 1 .921.202l6 7.5a.751.751 0 0 1-1.172.938l-5.62-7.027-5.459 2.73a.75.75 0 0 1-.934-.222l-6-8a.75.75 0 0 1 .15-1.05"
        />
      </svg>
    ))
);
ChartLineDescIconDuotone.displayName = "ChartLineDescIconDuotone";
export { ChartLineDescIconDuotone };
