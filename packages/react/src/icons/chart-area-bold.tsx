import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartAreaIconBold = memo(
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
          d="M21.793 4.293A1 1 0 0 1 23.5 5v12.75A2.25 2.25 0 0 1 21.25 20H1.5a1 1 0 0 1-.707-1.707l8-8 .073-.066a1 1 0 0 1 1.341.066L13 13.086zm-8.086 10.914a1 1 0 0 1-1.414 0L9.5 12.414 3.914 18H21.25a.25.25 0 0 0 .25-.25V7.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartAreaIconBold.displayName = "ChartAreaIconBold";
export { ChartAreaIconBold };
