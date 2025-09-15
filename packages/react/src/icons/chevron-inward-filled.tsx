import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronInwardFilled = memo(
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
          d="M11.293 14.293a1 1 0 0 1 1.414 0l6 6A1 1 0 0 1 18 22H6a1 1 0 0 1-.707-1.707zM18 2a1 1 0 0 1 .707 1.707l-6 6a1 1 0 0 1-1.414 0l-6-6A1 1 0 0 1 6 2z"
        />
      </svg>
    ))
);
ChevronInwardFilled.displayName = "ChevronInwardFilled";
export { ChevronInwardFilled };
