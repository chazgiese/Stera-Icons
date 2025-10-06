import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CandleChartFilled = memo(
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
          d="M7 1a1 1 0 0 1 1 1v2h1l.204.01A2 2 0 0 1 11 6v12a2 2 0 0 1-2 2H8v2a1 1 0 1 1-2 0v-2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V2a1 1 0 0 1 1-1M17 3a1 1 0 0 1 1 1v2h1l.204.01A2 2 0 0 1 21 8v8a2 2 0 0 1-2 2h-1v2a1 1 0 1 1-2 0v-2h-1a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V4a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CandleChartFilled.displayName = "CandleChartFilled";
export { CandleChartFilled };
