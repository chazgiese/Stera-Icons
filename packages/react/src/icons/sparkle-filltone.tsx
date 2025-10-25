import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparkleIconFilltone = memo(
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
          d="M13.09 5.585a8 8 0 0 0 5.325 5.324L22 12l-3.585 1.09a8 8 0 0 0-5.324 5.325L12 22l-1.09-3.585a8 8 0 0 0-5.325-5.324L2 12l3.585-1.09a8 8 0 0 0 5.324-5.325L12 2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1a1 1 0 0 1 .957.709l1.09 3.585a7 7 0 0 0 4.66 4.658l3.584 1.091a1 1 0 0 1 0 1.914l-3.585 1.09a7 7 0 0 0-4.658 4.66l-1.091 3.584a1 1 0 0 1-1.914 0l-1.09-3.585a7 7 0 0 0-4.659-4.658l-3.585-1.091a1 1 0 0 1 0-1.914l3.585-1.09a7 7 0 0 0 4.658-4.659l1.091-3.585A1 1 0 0 1 12 1m-.135 4.876a9 9 0 0 1-5.989 5.99L5.433 12l.443.135a9 9 0 0 1 5.99 5.989l.134.442.135-.442a9 9 0 0 1 5.989-5.99l.442-.134-.442-.135a9 9 0 0 1-5.99-5.989L12 5.433z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SparkleIconFilltone.displayName = "SparkleIconFilltone";
export { SparkleIconFilltone };
