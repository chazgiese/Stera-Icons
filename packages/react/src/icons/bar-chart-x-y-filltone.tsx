import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BarChartXYIconFilltone = memo(
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
          <path d="M8 10.5A1.5 1.5 0 0 1 9.5 12v4a1.5 1.5 0 0 1-3 0v-4A1.5 1.5 0 0 1 8 10.5M13 3.5A1.5 1.5 0 0 1 14.5 5v11a1.5 1.5 0 0 1-3 0V5A1.5 1.5 0 0 1 13 3.5M18 7.5A1.5 1.5 0 0 1 19.5 9v7a1.5 1.5 0 0 1-3 0V9A1.5 1.5 0 0 1 18 7.5" />
        </g>
        <path
          fill="currentColor"
          d="M3 1.5A1.5 1.5 0 0 1 4.5 3v14.8c0 .584.001.933.022 1.191.02.241.05.268.033.236.048.094.124.17.218.218-.032-.016-.005.013.236.032.258.022.607.023 1.191.023H21a1.5 1.5 0 0 1 0 3H6.2c-.535 0-1.027.001-1.435-.032-.427-.035-.893-.115-1.354-.35a3.5 3.5 0 0 1-1.53-1.53c-.234-.46-.314-.926-.349-1.353-.033-.408-.032-.9-.032-1.435V3A1.5 1.5 0 0 1 3 1.5"
        />
      </svg>
    ))
);
BarChartXYIconFilltone.displayName = "BarChartXYIconFilltone";
export { BarChartXYIconFilltone };
