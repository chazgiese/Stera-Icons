import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowURightTopBold = memo(
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
          d="M17.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 .158.207l.006.012A1 1 0 0 1 23 7a1 1 0 0 1-.293.707l-4 4a1 1 0 1 1-1.414-1.414L19.586 8H8.5a5.5 5.5 0 1 0 0 11H16a1 1 0 1 1 0 2H8.5a7.5 7.5 0 0 1 0-15h11.086l-2.293-2.293a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ArrowURightTopBold.displayName = "ArrowURightTopBold";
export { ArrowURightTopBold };
