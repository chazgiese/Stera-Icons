import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineSegmentHIconFill = memo(
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
          d="M19.5 8.5a3.5 3.5 0 1 1-3.355 4.5h-8.29a3.501 3.501 0 1 1 0-2h8.29A3.5 3.5 0 0 1 19.5 8.5"
        />
      </svg>
    ))
);
LineSegmentHIconFill.displayName = "LineSegmentHIconFill";
export { LineSegmentHIconFill };
