import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartCandleIconFilltone = memo(
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
          <path d="M8 22a1 1 0 1 1-2 0v-2h2zM18 20a1 1 0 1 1-2 0v-2h2zM17 3a1 1 0 0 1 1 1v2h-2V4a1 1 0 0 1 1-1M7 1a1 1 0 0 1 1 1v2H6V2a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          d="M9.204 4.01A2 2 0 0 1 11 6v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4zM19.204 6.01A2 2 0 0 1 21 8v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4z"
        />
      </svg>
    ))
);
ChartCandleIconFilltone.displayName = "ChartCandleIconFilltone";
export { ChartCandleIconFilltone };
