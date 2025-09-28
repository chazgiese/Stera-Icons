import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineSegmentFilled = memo(
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
          d="M18.5 2a3.5 3.5 0 1 1-1.665 6.578l-8.257 8.257a3.5 3.5 0 1 1-1.414-1.414l8.257-8.257A3.5 3.5 0 0 1 18.5 2"
        />
      </svg>
    ))
);
LineSegmentFilled.displayName = "LineSegmentFilled";
export { LineSegmentFilled };
