import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartLineDescIconFillDuotone = memo(
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
          d="M22 18.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M2.1 2.8a1.5 1.5 0 0 1 2.1.3l5.249 6.997 4.88-2.44a1.5 1.5 0 0 1 1.722.273l.087.093 6 7a1.5 1.5 0 0 1-2.277 1.953l-5.237-6.111L9.67 13.34a1.5 1.5 0 0 1-1.872-.44l-6-8a1.5 1.5 0 0 1 .3-2.102"
        />
      </svg>
    ))
);
ChartLineDescIconFillDuotone.displayName = "ChartLineDescIconFillDuotone";
export { ChartLineDescIconFillDuotone };
