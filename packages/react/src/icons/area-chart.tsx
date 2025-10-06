import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AreaChart = memo(
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
          d="M21.97 4.47a.751.751 0 0 1 1.28.53v14a.75.75 0 0 1-.75.75h-21a.751.751 0 0 1-.53-1.28l8-8 .114-.094a.75.75 0 0 1 .946.093L13 13.44zm-8.44 10.56a.75.75 0 0 1-1.06 0L9.5 12.06l-6.19 6.19h18.44V6.81z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AreaChart.displayName = "AreaChart";
export { AreaChart };
