import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineChartFilled = memo(
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
          d="M22 18.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM19.8 3.1a1.501 1.501 0 0 1 2.4 1.8l-6 8a1.5 1.5 0 0 1-1.87.441l-4.954-2.476-5.237 6.111a1.5 1.5 0 0 1-2.278-1.953l6-7 .087-.093a1.5 1.5 0 0 1 1.723-.272l4.88 2.44z"
        />
      </svg>
    ))
);
LineChartFilled.displayName = "LineChartFilled";
export { LineChartFilled };
