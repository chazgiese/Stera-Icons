import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoonCrescentIconFilled = memo(
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
          d="M10.834 1.38a10.16 10.16 0 0 1 4.966-.136 1 1 0 0 1 .243 1.863c-3.208 1.667-4.993 5.541-4.015 9.35.976 3.8 4.356 6.2 7.907 5.973a1 1 0 0 1 .75 1.725 10.4 10.4 0 0 1-4.353 2.465C10.647 24.21 4.86 20.677 3.36 14.836 1.864 9.009 5.167 2.964 10.834 1.38"
        />
      </svg>
    ))
);
MoonCrescentIconFilled.displayName = "MoonCrescentIconFilled";
export { MoonCrescentIconFilled };
