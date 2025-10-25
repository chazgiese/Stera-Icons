import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BarChartIconLinetone = memo(
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
          d="M7.75 3A2.25 2.25 0 0 1 10 5.25v5.765q.123-.015.25-.015h3.5q.127 0 .25.015V9.25A2.25 2.25 0 0 1 16.25 7h3.5A2.25 2.25 0 0 1 22 9.25V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5.25A2.25 2.25 0 0 1 4.25 3zm-3.5 2a.25.25 0 0 0-.25.25V19h4V5.25A.25.25 0 0 0 7.75 5zm6 8a.25.25 0 0 0-.25.25V19h4v-5.75a.25.25 0 0 0-.25-.25zm6-4a.25.25 0 0 0-.25.25V19h4V9.25a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path fill="currentColor" d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
      </svg>
    ))
);
BarChartIconLinetone.displayName = "BarChartIconLinetone";
export { BarChartIconLinetone };
