import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BarChartRowDescIconFilled = memo(
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
          d="M4 23a1 1 0 0 0 1-1v-1h6.75c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25H5v-1.5h10.75c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25H5V8h14.75C20.44 8 21 7.44 21 6.75v-2.5C21 3.56 20.44 3 19.75 3H5V2a1 1 0 0 0-2 0v20a1 1 0 0 0 1 1"
        />
      </svg>
    ))
);
BarChartRowDescIconFilled.displayName = "BarChartRowDescIconFilled";
export { BarChartRowDescIconFilled };
