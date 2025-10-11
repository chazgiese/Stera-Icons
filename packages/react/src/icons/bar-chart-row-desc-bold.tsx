import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BarChartRowDescIconBold = memo(
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
          d="M4 1a1 1 0 0 1 1 1h13.75A2.25 2.25 0 0 1 21 4.25v3.5A2.25 2.25 0 0 1 18.75 10h-1.765q.015.123.015.25v3.5A2.25 2.25 0 0 1 14.75 16h-1.765q.015.123.015.25v3.5A2.25 2.25 0 0 1 10.75 22H5l-.005.102A1 1 0 0 1 3 22V2a1 1 0 0 1 1-1m1 15v4h5.75a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25zm0-2h9.75a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25H5zm0-6h13.75a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25H5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BarChartRowDescIconBold.displayName = "BarChartRowDescIconBold";
export { BarChartRowDescIconBold };
