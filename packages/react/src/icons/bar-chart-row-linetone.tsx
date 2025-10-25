import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BarChartRowIconLinetone = memo(
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
          d="M18.75 2A2.25 2.25 0 0 1 21 4.25v3.5A2.25 2.25 0 0 1 18.75 10h-5.765q.015.123.015.25v3.5q0 .127-.015.25h1.765A2.25 2.25 0 0 1 17 16.25v3.5A2.25 2.25 0 0 1 14.75 22H5v-2h9.75a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25H5v-2h5.75a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25H5V8h13.75a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25H5V2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M4 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
BarChartRowIconLinetone.displayName = "BarChartRowIconLinetone";
export { BarChartRowIconLinetone };
