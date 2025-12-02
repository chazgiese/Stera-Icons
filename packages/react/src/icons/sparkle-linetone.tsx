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
          d="M12.8 22.598a1 1 0 0 0 .157-.889L12 18.567l.136-.443a9 9 0 0 1 5.989-5.99l.442-.134-.442-.135a9 9 0 0 1-5.99-5.989L12 5.432l.957-3.141a1 1 0 0 0 .001-.582l1.09 3.585a7 7 0 0 0 4.659 4.658l3.585 1.091c.42.128.709.517.709.957s-.289.829-.709.957l-3.585 1.09a7 7 0 0 0-4.658 4.66l-1.091 3.584a1 1 0 0 1-.158.307"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.043 1.71a1 1 0 0 1 1.914.581l-1.092 3.585a9 9 0 0 1-5.989 5.99L5.433 12l.443.134a9 9 0 0 1 5.99 5.99l1.091 3.584a1.001 1.001 0 0 1-1.914.582l-1.09-3.585a7 7 0 0 0-4.659-4.658l-3.585-1.09a1.001 1.001 0 0 1 0-1.915l3.585-1.09a7 7 0 0 0 4.658-4.659z"
        />
      </svg>
    ))
);
SparkleIconLinetone.displayName = "SparkleIconLinetone";
export { SparkleIconLinetone };
