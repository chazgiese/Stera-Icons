import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullCircleLeftIconFillDuotone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m1.883 5.576a1 1 0 0 0-1.09.217l-4.5 4.5a1 1 0 0 0 0 1.414l4.5 4.5A1 1 0 0 0 14.5 16.5v-9a1 1 0 0 0-.617-.924"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12.793 6.793A1 1 0 0 1 14.5 7.5v9a1 1 0 0 1-1.707.707l-4.5-4.5a1 1 0 0 1 0-1.414z"
        />
      </svg>
    ))
);
ChevronFullCircleLeftIconFillDuotone.displayName =
  "ChevronFullCircleLeftIconFillDuotone";
export { ChevronFullCircleLeftIconFillDuotone };
