import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowRotationRightFilled = memo(
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
          d="M18.364 5.636A1 1 0 0 0 16.95 7.05 7.002 7.002 0 0 1 13 18.927V17a1 1 0 0 0-1.707-.707l-3 3a1 1 0 0 0 0 1.414l3 3A1 1 0 0 0 13 23v-2.057a9 9 0 0 0 5.364-15.307M12.707.293A1 1 0 0 0 11 1v2.056a9.001 9.001 0 0 0-5.364 15.308A1 1 0 0 0 7.05 16.95 7.001 7.001 0 0 1 11 5.072V7a1 1 0 0 0 1.707.707l3-3a1 1 0 0 0 0-1.414z"
        />
      </svg>
    ))
);
ArrowRotationRightFilled.displayName = "ArrowRotationRightFilled";
export { ArrowRotationRightFilled };
