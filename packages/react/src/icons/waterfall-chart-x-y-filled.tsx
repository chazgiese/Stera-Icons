import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WaterfallChartXYFilled = memo(
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
          d="M3 1.5A1.5 1.5 0 0 1 4.5 3v14.8c0 .584.001.933.022 1.191.02.241.05.268.033.236.048.094.124.17.218.218-.032-.016-.005.013.236.032.258.022.607.023 1.191.023H21a1.5 1.5 0 0 1 0 3H6.2c-.535 0-1.027.001-1.435-.032-.427-.035-.893-.115-1.354-.35a3.5 3.5 0 0 1-1.53-1.53c-.234-.46-.314-.926-.349-1.353-.033-.408-.032-.9-.032-1.435V3A1.5 1.5 0 0 1 3 1.5"
        />
        <path
          fill="currentColor"
          d="M8 12.5A1.5 1.5 0 0 1 9.5 14v3a1.5 1.5 0 0 1-3 0v-3A1.5 1.5 0 0 1 8 12.5M12 7.5A1.5 1.5 0 0 1 13.5 9v6a1.5 1.5 0 0 1-3 0V9A1.5 1.5 0 0 1 12 7.5M20 2.5A1.5 1.5 0 0 1 21.5 4v6a1.5 1.5 0 0 1-3 0V4A1.5 1.5 0 0 1 20 2.5M16 4.5A1.5 1.5 0 0 1 17.5 6v3a1.5 1.5 0 0 1-3 0V6A1.5 1.5 0 0 1 16 4.5"
        />
      </svg>
    ))
);
WaterfallChartXYFilled.displayName = "WaterfallChartXYFilled";
export { WaterfallChartXYFilled };
