import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineSegmentV = memo(
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
          d="M8.75 4.5a3.25 3.25 0 1 1 4 3.162v8.676a3.25 3.25 0 1 1-1.5 0V7.662A3.25 3.25 0 0 1 8.75 4.5m1.5 15a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0m0-15a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LineSegmentV.displayName = "LineSegmentV";
export { LineSegmentV };
