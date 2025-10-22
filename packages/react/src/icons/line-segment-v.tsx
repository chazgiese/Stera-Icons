import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineSegmentVIcon = memo(
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
          d="M12 1.25a3.25 3.25 0 0 1 .75 6.411v8.677a3.25 3.25 0 1 1-1.5 0V7.66A3.25 3.25 0 0 1 12 1.25m0 16.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m0-15a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LineSegmentVIcon.displayName = "LineSegmentVIcon";
export { LineSegmentVIcon };
