import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineSegmentHIcon = memo(
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
          d="M19.5 8.75a3.25 3.25 0 1 1-3.162 4H7.662a3.25 3.25 0 1 1 0-1.5h8.676a3.25 3.25 0 0 1 3.162-2.5m-15 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m15 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LineSegmentHIcon.displayName = "LineSegmentHIcon";
export { LineSegmentHIcon };
