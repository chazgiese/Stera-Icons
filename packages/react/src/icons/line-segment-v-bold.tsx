import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineSegmentVIconBold = memo(
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
          d="M8.5 4.5A3.5 3.5 0 1 1 13 7.854v8.292a3.501 3.501 0 1 1-2 0V7.853A3.5 3.5 0 0 1 8.5 4.5m2 15a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m0-15a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LineSegmentVIconBold.displayName = "LineSegmentVIconBold";
export { LineSegmentVIconBold };
