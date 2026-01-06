import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarRowDescIconBoldDuotone = memo(
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
          d="M10.75 22A2.25 2.25 0 0 0 13 19.75v-3.5q0-.127-.015-.25h1.765A2.25 2.25 0 0 0 17 13.75v-3.5q0-.127-.015-.25h1.765A2.25 2.25 0 0 0 21 7.75v-3.5A2.25 2.25 0 0 0 18.75 2H5v2h13.75a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25H5v2h9.75a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25H5v2h5.75a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25H5v2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M4 23a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v20a1 1 0 0 0 1 1"
        />
      </svg>
    ))
);
ChartBarRowDescIconBoldDuotone.displayName = "ChartBarRowDescIconBoldDuotone";
export { ChartBarRowDescIconBoldDuotone };
