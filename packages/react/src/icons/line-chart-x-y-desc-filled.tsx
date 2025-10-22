import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineChartXYDescIconFilled = memo(
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
          d="M6.116 5.788a1.5 1.5 0 0 1 2.096.328l3.887 5.33 3.174-1.758a1.5 1.5 0 0 1 1.79.252l.09.1 5 6a1.5 1.5 0 0 1-2.305 1.92l-4.205-5.047-3.25 1.799a1.5 1.5 0 0 1-1.938-.428l-4.667-6.4a1.5 1.5 0 0 1 .328-2.096"
        />
      </svg>
    ))
);
LineChartXYDescIconFilled.displayName = "LineChartXYDescIconFilled";
export { LineChartXYDescIconFilled };
