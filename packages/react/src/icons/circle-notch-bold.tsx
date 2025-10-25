import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleNotchIconBold = memo(
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
          d="M18.364 4.222a1 1 0 0 1 1.414 0 11.002 11.002 0 0 1-1.667 16.925 11.002 11.002 0 0 1-16.9-11.293 11 11 0 0 1 3.01-5.632 1 1 0 0 1 1.414 1.414A9.002 9.002 0 0 0 12 21a9.002 9.002 0 0 0 6.364-15.364 1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
CircleNotchIconBold.displayName = "CircleNotchIconBold";
export { CircleNotchIconBold };
