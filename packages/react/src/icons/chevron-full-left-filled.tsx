import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullLeftIconFilled = memo(
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
          d="M14.293 4.293A1 1 0 0 1 16 5v14a1 1 0 0 1-1.707.707l-7-7a1 1 0 0 1 0-1.414z"
        />
        <path
          fill="currentColor"
          d="M14.293 4.293A1 1 0 0 1 16 5v14a1 1 0 0 1-1.707.707l-7-7a1 1 0 0 1 0-1.414z"
        />
      </svg>
    ))
);
ChevronFullLeftIconFilled.displayName = "ChevronFullLeftIconFilled";
export { ChevronFullLeftIconFilled };
