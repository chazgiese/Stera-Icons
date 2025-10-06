import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BarChartAsc = memo(
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
          d="M19.75 3.25a2 2 0 0 1 2 2v14H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25v-6a2 2 0 0 1 2-2h3.5q.26.002.5.065V9.25a2 2 0 0 1 2-2h3.5a2 2 0 0 1 .5.065V5.25a2 2 0 0 1 2-2zm-15.5 9.5a.5.5 0 0 0-.5.5v6h4.5v-6a.5.5 0 0 0-.5-.5zm6-4a.5.5 0 0 0-.5.5v10h4.5v-10a.5.5 0 0 0-.5-.5zm6-4a.5.5 0 0 0-.5.5v14h4.5v-14a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BarChartAsc.displayName = "BarChartAsc";
export { BarChartAsc };
