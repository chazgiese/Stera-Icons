import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullLeftIcon = memo(
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
          d="M14.47 4.469a.75.75 0 0 1 1.28.53v14a.75.75 0 0 1-1.28.53l-7-7a.75.75 0 0 1 0-1.06zm-5.41 7.53 5.19 5.19V6.809z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChevronFullLeftIcon.displayName = "ChevronFullLeftIcon";
export { ChevronFullLeftIcon };
