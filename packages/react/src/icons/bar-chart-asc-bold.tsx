import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BarChartAscIconBold = memo(
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
          d="M19.75 3A2.25 2.25 0 0 1 22 5.25V19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2v-5.75A2.25 2.25 0 0 1 4.25 11h3.5q.127 0 .25.015V9.25A2.25 2.25 0 0 1 10.25 7h3.5q.127 0 .25.015V5.25A2.25 2.25 0 0 1 16.25 3zM4.25 13a.25.25 0 0 0-.25.25V19h4v-5.75a.25.25 0 0 0-.25-.25zm6-4a.25.25 0 0 0-.25.25V19h4V9.25a.25.25 0 0 0-.25-.25zm6-4a.25.25 0 0 0-.25.25V19h4V5.25a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BarChartAscIconBold.displayName = "BarChartAscIconBold";
export { BarChartAscIconBold };
