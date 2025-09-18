import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullOutward = memo(
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
          d="M18 15.25a.75.75 0 0 1 .53 1.28l-6 6a.75.75 0 0 1-1.06 0l-6-6A.75.75 0 0 1 6 15.25zm-6 5.69 4.19-4.19H7.81zm-.53-19.47a.75.75 0 0 1 1.06 0l6 6A.75.75 0 0 1 18 8.75H6a.75.75 0 0 1-.53-1.28zM7.81 7.25h8.38L12 3.06z"
        />
      </svg>
    ))
);
ChevronFullOutward.displayName = "ChevronFullOutward";
export { ChevronFullOutward };
