import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BarChartRowAscIconLinetone = memo(
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
          d="M10.75 2A2.25 2.25 0 0 1 13 4.25v3.5q0 .127-.015.25h1.765A2.25 2.25 0 0 1 17 10.25v3.5q0 .127-.015.25h1.765A2.25 2.25 0 0 1 21 16.25v3.5A2.25 2.25 0 0 1 18.75 22H5v-2h13.75a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25H5v-2h9.75a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25H5V8h5.75a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25H5V2z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M4 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
BarChartRowAscIconLinetone.displayName = "BarChartRowAscIconLinetone";
export { BarChartRowAscIconLinetone };
