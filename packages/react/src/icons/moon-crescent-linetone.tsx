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
          d="M15.121 1.331a1 1 0 0 1 .922 1.775c-3.208 1.667-4.992 5.542-4.015 9.35.976 3.8 4.357 6.2 7.908 5.972a1 1 0 0 1 .128 1.996c-4.547.293-8.768-2.776-9.973-7.471-1.203-4.686.975-9.515 5.03-11.622"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.834 1.38a10.16 10.16 0 0 1 4.966-.136 1 1 0 0 1-.437 1.952 8.15 8.15 0 0 0-3.99.11C6.818 4.58 4.055 9.5 5.298 14.34c1.239 4.825 5.959 7.623 10.496 6.354a8.4 8.4 0 0 0 3.52-1.994 1 1 0 0 1 1.371 1.456 10.4 10.4 0 0 1-4.353 2.465C10.647 24.21 4.86 20.677 3.36 14.836 1.864 9.009 5.167 2.964 10.834 1.38"
        />
      </svg>
    ))
);
MoonCrescentIconLinetone.displayName = "MoonCrescentIconLinetone";
export { MoonCrescentIconLinetone };
