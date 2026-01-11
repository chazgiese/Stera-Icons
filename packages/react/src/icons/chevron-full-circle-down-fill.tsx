import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullCircleDownIconFill = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M8.52 9.25c-1.048 0-1.63 1.213-.976 2.031l3.48 4.35c.5.625 1.452.625 1.953 0l3.48-4.35c.654-.818.07-2.031-.978-2.031z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChevronFullCircleDownIconFill.displayName = "ChevronFullCircleDownIconFill";
export { ChevronFullCircleDownIconFill };
