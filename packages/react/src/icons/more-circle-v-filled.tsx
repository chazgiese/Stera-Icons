import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoreCircleVIconFilled = memo(
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
          d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11m-9.5-5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0 5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0 5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MoreCircleVIconFilled.displayName = "MoreCircleVIconFilled";
export { MoreCircleVIconFilled };
