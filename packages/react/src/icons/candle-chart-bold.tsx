import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CandleChartIconBold = memo(
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
          fillRule="evenodd"
          d="M7 1a1 1 0 0 1 1 1v2h.5A2.5 2.5 0 0 1 11 6.5v11A2.5 2.5 0 0 1 8.5 20H8v2a1 1 0 1 1-2 0v-2h-.5A2.5 2.5 0 0 1 3 17.5v-11A2.5 2.5 0 0 1 5.5 4H6V2a1 1 0 0 1 1-1M5.5 6a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM17 3a1 1 0 0 1 1 1v2h.5A2.5 2.5 0 0 1 21 8.5v7a2.5 2.5 0 0 1-2.5 2.5H18v2a1 1 0 1 1-2 0v-2h-.5a2.5 2.5 0 0 1-2.5-2.5v-7A2.5 2.5 0 0 1 15.5 6h.5V4a1 1 0 0 1 1-1m-1.5 5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CandleChartIconBold.displayName = "CandleChartIconBold";
export { CandleChartIconBold };
