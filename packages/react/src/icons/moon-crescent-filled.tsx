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
          d="M8.82 1.469a1 1 0 0 1 1.177 1.415 9 9 0 0 0 10.605 12.732 1 1 0 0 1 1.177 1.416A11 11 0 0 1 12 23C5.925 23 1 18.075 1 12 1 7.03 4.296 2.833 8.82 1.47"
        />
      </svg>
    ))
);
MoonCrescentIconFilled.displayName = "MoonCrescentIconFilled";
export { MoonCrescentIconFilled };
