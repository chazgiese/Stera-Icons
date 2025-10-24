import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronOutwardIcon = memo(
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
          d="M17.47 15.47a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06L12 20.94zM11.47 1.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06L12 3.06 6.53 8.53a.75.75 0 0 1-1.06-1.06z"
        />
        <path
          fill="currentColor"
          d="M17.47 15.47a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06L12 20.94zM11.47 1.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06L12 3.06 6.53 8.53a.75.75 0 0 1-1.06-1.06z"
        />
      </svg>
    ))
);
ChevronOutwardIcon.displayName = "ChevronOutwardIcon";
export { ChevronOutwardIcon };
