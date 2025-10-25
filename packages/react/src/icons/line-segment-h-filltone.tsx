import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineSegmentHIconFilltone = memo(
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
          d="M17 11a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M4.5 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7M19.5 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"
        />
      </svg>
    ))
);
LineSegmentHIconFilltone.displayName = "LineSegmentHIconFilltone";
export { LineSegmentHIconFilltone };
