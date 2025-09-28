import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowURightTopFilled = memo(
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
          d="M17.617 2.076a1 1 0 0 1 1.09.217l4 4a1 1 0 0 1 .158.207l.006.012A1 1 0 0 1 23 7a1 1 0 0 1-.293.707l-4 4A1 1 0 0 1 17 11V8H8.5a5.5 5.5 0 0 0 0 11H16a1 1 0 1 1 0 2H8.5a7.5 7.5 0 1 1 0-15H17V3a1 1 0 0 1 .617-.924"
        />
      </svg>
    ))
);
ArrowURightTopFilled.displayName = "ArrowURightTopFilled";
export { ArrowURightTopFilled };
