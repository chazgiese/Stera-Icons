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
          d="M4 23a1 1 0 0 0 1-1h5.75A2.25 2.25 0 0 0 13 19.75v-3.5q0-.127-.015-.25h1.765A2.25 2.25 0 0 0 17 13.75v-3.5q0-.127-.015-.25h1.765A2.25 2.25 0 0 0 21 7.75v-3.5A2.25 2.25 0 0 0 18.75 2H5l-.005-.103A1 1 0 0 0 3 2v20a1 1 0 0 0 1 1M5 8V4h13.75a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25zm0 2h9.75a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25H5zm0 6h5.75a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25H5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BarChartRowDescIconBold.displayName = "BarChartRowDescIconBold";
export { BarChartRowDescIconBold };
