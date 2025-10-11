import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullDownIcon = memo(
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
          d="M18.397 8.25c.89 0 1.336 1.077.707 1.707L12.53 16.53a.75.75 0 0 1-1.06 0L4.896 9.957c-.63-.63-.183-1.707.707-1.707zM12 14.94l5.19-5.19H6.81z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChevronFullDownIcon.displayName = "ChevronFullDownIcon";
export { ChevronFullDownIcon };
