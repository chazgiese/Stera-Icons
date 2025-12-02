import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoonCrescentIconLinetone = memo(
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
          d="M8.22 1.968a1 1 0 1 1 1.777.916 9 9 0 0 0 10.605 12.732 1 1 0 0 1 .578 1.914A11 11 0 0 1 18 18C11.925 18 7 13.075 7 7c0-1.813.442-3.524 1.22-5.032"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M21.766 17.054C19.936 20.582 16.254 23 12 23 5.925 23 1 18.075 1 12 1 7.037 4.287 2.845 8.8 1.475a1 1 0 0 0-.58.493 11 11 0 0 0-.885 2.336A9 9 0 0 0 12 21a8.97 8.97 0 0 0 6.725-3.025c.848-.056 1.67-.208 2.455-.445a1 1 0 0 0 .586-.476"
        />
      </svg>
    ))
);
MoonCrescentIconLinetone.displayName = "MoonCrescentIconLinetone";
export { MoonCrescentIconLinetone };
