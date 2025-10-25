import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CandleChartIconLinetone = memo(
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
          fillRule="evenodd"
          d="M8.5 4A2.5 2.5 0 0 1 11 6.5v11A2.5 2.5 0 0 1 8.5 20h-3A2.5 2.5 0 0 1 3 17.5v-11A2.5 2.5 0 0 1 5.5 4zm-3 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM18.5 6A2.5 2.5 0 0 1 21 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5v-7A2.5 2.5 0 0 1 15.5 6zm-3 2a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CandleChartIconLinetone.displayName = "CandleChartIconLinetone";
export { CandleChartIconLinetone };
