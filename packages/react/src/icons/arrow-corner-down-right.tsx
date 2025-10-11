import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerDownRightIcon = memo(
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
          d="M3 2.25a.75.75 0 0 1 .75.75v11A2.25 2.25 0 0 0 6 16.25h13.19l-3.72-3.72a.75.75 0 1 1 1.06-1.06l5 5a.75.75 0 0 1 .213.625l-.006.034q-.003.02-.01.04a1 1 0 0 1-.027.092l-.018.048a1 1 0 0 1-.058.107l-.094.114-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H6A3.75 3.75 0 0 1 2.25 14V3A.75.75 0 0 1 3 2.25"
        />
      </svg>
    ))
);
ArrowCornerDownRightIcon.displayName = "ArrowCornerDownRightIcon";
export { ArrowCornerDownRightIcon };
