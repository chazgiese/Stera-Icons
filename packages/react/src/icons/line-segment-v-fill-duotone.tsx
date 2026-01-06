import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineSegmentVIconFillDuotone = memo(
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
          d="M13 16.145a3.5 3.5 0 0 0-2 0V7.854a3.5 3.5 0 0 0 2 0z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 16a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M12 1a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"
        />
      </svg>
    ))
);
LineSegmentVIconFillDuotone.displayName = "LineSegmentVIconFillDuotone";
export { LineSegmentVIconFillDuotone };
