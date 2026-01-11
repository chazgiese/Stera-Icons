import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullCircleLeftIconFill = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m2.75 7.52c0-1.048-1.213-1.63-2.031-.976l-4.35 3.48a1.25 1.25 0 0 0 0 1.953l4.35 3.48c.818.654 2.031.07 2.031-.978z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChevronFullCircleLeftIconFill.displayName = "ChevronFullCircleLeftIconFill";
export { ChevronFullCircleLeftIconFill };
