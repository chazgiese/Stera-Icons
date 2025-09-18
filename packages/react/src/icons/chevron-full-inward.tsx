import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullInward = memo(
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
          d="M11.47 14.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1-.53 1.28H6a.75.75 0 0 1-.53-1.28zm-3.66 5.78h8.38L12 16.06zM18 2.25a.75.75 0 0 1 .53 1.28l-6 6a.75.75 0 0 1-1.06 0l-6-6A.75.75 0 0 1 6 2.25zm-6 5.69 4.19-4.19H7.81z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChevronFullInward.displayName = "ChevronFullInward";
export { ChevronFullInward };
