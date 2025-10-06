import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BarChartRowAsc = memo(
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
          d="M4 1.25a.75.75 0 0 1 .75.75v.25h6a2 2 0 0 1 2 2v3.5q-.002.26-.065.5h2.065a2 2 0 0 1 2 2v3.5a2 2 0 0 1-.065.5h2.065a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-14V22a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 4 1.25m.75 14.5v4.5h14a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5zm0-1.5h10a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-10zm0-6h6a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-6z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BarChartRowAsc.displayName = "BarChartRowAsc";
export { BarChartRowAsc };
