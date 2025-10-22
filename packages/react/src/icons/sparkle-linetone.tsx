import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparkleIconLinetone = memo(
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
          d="M11.71 1.043a1 1 0 0 1 1.247.666l1.091 3.585a7 7 0 0 0 4.658 4.659l3.585 1.09a1.001 1.001 0 0 1 0 1.915l-3.585 1.09a7 7 0 0 0-4.658 4.658l-1.09 3.585a1.001 1.001 0 0 1-1.914-.582l1.091-3.584a9 9 0 0 1 5.99-5.99l.442-.135-.442-.134a9 9 0 0 1-5.99-5.99l-1.092-3.585a1 1 0 0 1 .666-1.248"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M11.043 1.71a1 1 0 0 1 1.914.582l-1.092 3.584a9 9 0 0 1-5.989 5.99L5.433 12l.443.134a9 9 0 0 1 5.99 5.99l1.091 3.584a1.001 1.001 0 0 1-1.914.582l-1.09-3.584a7 7 0 0 0-4.659-4.659l-3.585-1.09a1.001 1.001 0 0 1 0-1.915l3.585-1.09a7 7 0 0 0 4.658-4.659z"
        />
      </svg>
    ))
);
SparkleIconLinetone.displayName = "SparkleIconLinetone";
export { SparkleIconLinetone };
