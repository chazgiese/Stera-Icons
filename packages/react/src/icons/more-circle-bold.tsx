import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoreCircleIconBold = memo(
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
          d="M15.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M10.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M5.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m2 0a9 9 0 1 0 18 0 9 9 0 0 0-18 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MoreCircleIconBold.displayName = "MoreCircleIconBold";
export { MoreCircleIconBold };
