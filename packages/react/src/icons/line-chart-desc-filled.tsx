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
          d="M22 18.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM2.1 2.8a1.5 1.5 0 0 1 2.1.3l5.25 6.997 4.88-2.44a1.5 1.5 0 0 1 1.722.273l.087.093 6 7a1.5 1.5 0 0 1-2.278 1.953l-5.237-6.111-4.953 2.476a1.5 1.5 0 0 1-1.871-.44l-6-8a1.5 1.5 0 0 1 .3-2.102"
        />
        <path
          fill="currentColor"
          d="M22 18.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM2.1 2.8a1.5 1.5 0 0 1 2.1.3l5.25 6.998 4.88-2.44a1.5 1.5 0 0 1 1.722.273l.087.093 6 7a1.5 1.5 0 0 1-2.278 1.953l-5.237-6.112-4.953 2.477a1.5 1.5 0 0 1-1.871-.441l-6-8A1.5 1.5 0 0 1 2.1 2.8"
        />
      </svg>
    ))
);
LineChartDescIconFilled.displayName = "LineChartDescIconFilled";
export { LineChartDescIconFilled };
