import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarXYIconFill = memo(
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
          d="M2 2.5A1.5 1.5 0 0 1 3.5 4v12.8c0 .584.001.933.022 1.191.02.241.05.268.033.236.048.094.124.17.218.218-.032-.016-.005.013.236.032.258.022.607.023 1.191.023H22a1.5 1.5 0 0 1 0 3H5.2c-.535 0-1.027.001-1.435-.032-.427-.035-.893-.115-1.354-.35a3.5 3.5 0 0 1-1.53-1.53c-.234-.46-.314-.926-.349-1.353C.5 17.827.5 17.335.5 16.8V4A1.5 1.5 0 0 1 2 2.5"
        />
        <path
          fill="currentColor"
          d="M7 11.5A1.5 1.5 0 0 1 8.5 13v3a1.5 1.5 0 0 1-3 0v-3A1.5 1.5 0 0 1 7 11.5M11 4.5A1.5 1.5 0 0 1 12.5 6v10a1.5 1.5 0 0 1-3 0V6A1.5 1.5 0 0 1 11 4.5M15 9.5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 15 9.5M19 6.5A1.5 1.5 0 0 1 20.5 8v8a1.5 1.5 0 0 1-3 0V8A1.5 1.5 0 0 1 19 6.5"
        />
      </svg>
    ))
);
ChartBarXYIconFill.displayName = "ChartBarXYIconFill";
export { ChartBarXYIconFill };
