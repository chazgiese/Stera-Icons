import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartAreaIconFillDuotone = memo(
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
          d="M23.25 17.75a2 2 0 0 1-2 2H1.5a.75.75 0 0 0 .53-.22l7.47-7.47 2.97 2.97a.75.75 0 0 0 1.06 0l9.5-9.5a.75.75 0 0 0 .22-.53z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M21.97 4.47a.75.75 0 1 1 1.06 1.06l-9.5 9.5a.75.75 0 0 1-1.06 0L9.5 12.06l-7.47 7.47a.75.75 0 1 1-1.06-1.06l8-8 .114-.094a.75.75 0 0 1 .946.094L13 13.44z"
        />
      </svg>
    ))
);
ChartAreaIconFillDuotone.displayName = "ChartAreaIconFillDuotone";
export { ChartAreaIconFillDuotone };
