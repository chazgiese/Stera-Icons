import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronRightIconFilltone = memo(
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
          d="M16.707 11.293a1 1 0 0 1 0 1.414l-7 7A1 1 0 0 0 10 19V5a1 1 0 0 0-.293-.707z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ChevronRightIconFilltone.displayName = "ChevronRightIconFilltone";
export { ChevronRightIconFilltone };
