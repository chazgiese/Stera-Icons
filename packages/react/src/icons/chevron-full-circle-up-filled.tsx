import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullCircleUpFilled = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 7.5a1 1 0 0 0-.707.293l-4.5 4.5A1 1 0 0 0 7.5 15h9a1 1 0 0 0 .707-1.707l-4.5-4.5A1 1 0 0 0 12 8.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChevronFullCircleUpFilled.displayName = "ChevronFullCircleUpFilled";
export { ChevronFullCircleUpFilled };
