import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScatterChartIconFilltone = memo(
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
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.5 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12.5 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M8.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M19.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
ScatterChartIconFilltone.displayName = "ScatterChartIconFilltone";
export { ScatterChartIconFilltone };
