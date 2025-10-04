import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerDownRightFilled = memo(
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
          d="M3 2a1 1 0 0 1 1 1v11a2 2 0 0 0 2 2h9v-4a1 1 0 0 1 1.707-.707l5 5a1 1 0 0 1 .164 1.194l-.006.012a1 1 0 0 1-.088.128l-.004.007-.066.073-5 5A1 1 0 0 1 15 22v-4H6a4 4 0 0 1-4-4V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ArrowCornerDownRightFilled.displayName = "ArrowCornerDownRightFilled";
export { ArrowCornerDownRightFilled };
