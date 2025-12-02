import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartLineXYIconFilled = memo(
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
          d="M18.79 5.116a1.5 1.5 0 0 1 2.423 1.768l-4.667 6.4a1.5 1.5 0 0 1-1.939.428l-3.249-1.799-3.372 4.047a1.5 1.5 0 0 1-2.304-1.92l4.167-5 .09-.1a1.5 1.5 0 0 1 1.788-.252l3.175 1.758z"
        />
      </svg>
    ))
);
ChartLineXYIconFilled.displayName = "ChartLineXYIconFilled";
export { ChartLineXYIconFilled };
