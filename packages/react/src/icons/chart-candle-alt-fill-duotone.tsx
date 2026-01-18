import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartCandleAltIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M5 20a1 1 0 1 1-2 0v-1.25h2zM21 19a1 1 0 1 1-2 0v-1.25h2zM13 18a1 1 0 1 1-2 0v-3.25h2zM4 5a1 1 0 0 1 1 1v3.25H3V6a1 1 0 0 1 1-1M12 5a1 1 0 0 1 1 1v1.25h-2V6a1 1 0 0 1 1-1M20 3a1 1 0 0 1 1 1v1.25h-2V4a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          d="M18 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM10 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM2 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
        />
        <path
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM10 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM2 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
        />
      </svg>
    ))
);
ChartCandleAltIconFillDuotone.displayName = "ChartCandleAltIconFillDuotone";
export { ChartCandleAltIconFillDuotone };
