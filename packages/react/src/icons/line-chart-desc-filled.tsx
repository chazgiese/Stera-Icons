import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineChartDescIconFilled = memo(
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
          d="M2 18.5a1.5 1.5 0 0 0 0 3h20a1.5 1.5 0 0 0 0-3zM4.2 3.1a1.501 1.501 0 0 0-2.4 1.8l6 8a1.5 1.5 0 0 0 1.87.441l4.954-2.476 5.237 6.111a1.5 1.5 0 0 0 2.278-1.953l-6-7-.087-.093a1.5 1.5 0 0 0-1.723-.272l-4.88 2.44z"
        />
      </svg>
    ))
);
LineChartDescIconFilled.displayName = "LineChartDescIconFilled";
export { LineChartDescIconFilled };
