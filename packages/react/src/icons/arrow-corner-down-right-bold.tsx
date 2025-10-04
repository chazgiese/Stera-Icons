import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerDownRightBold = memo(
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
          d="M3 2a1 1 0 0 1 1 1v11a2 2 0 0 0 2 2h12.586l-3.293-3.293a1 1 0 1 1 1.414-1.414l5 5a1 1 0 0 1 .164 1.194l-.006.012a1 1 0 0 1-.088.128l-.004.007-.066.073-5 5a1 1 0 1 1-1.414-1.414L18.586 18H6a4 4 0 0 1-4-4V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ArrowCornerDownRightBold.displayName = "ArrowCornerDownRightBold";
export { ArrowCornerDownRightBold };
