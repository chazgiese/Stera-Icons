import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpRightIconFilltone = memo(
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
          d="m13.5 11.914-6.793 6.793a1 1 0 0 1-1.414-1.414l6.793-6.793z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9 5a1 1 0 0 0-.707 1.707l9 9A1 1 0 0 0 19 15V6a1 1 0 0 0-1-1z"
        />
      </svg>
    ))
);
ArrowUpRightIconFilltone.displayName = "ArrowUpRightIconFilltone";
export { ArrowUpRightIconFilltone };
