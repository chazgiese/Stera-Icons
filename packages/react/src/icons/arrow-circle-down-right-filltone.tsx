import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleDownRightIconFilltone = memo(
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
          d="M4.222 4.222c4.296-4.296 11.26-4.296 15.556 0s4.296 11.26 0 15.556-11.26 4.296-15.556 0-4.296-11.26 0-15.556"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M7.757 7.758a1 1 0 0 1 1.415 0l5.364 5.364V8.465a1 1 0 1 1 2 0v7.07a1 1 0 0 1-1 1H8.465a1 1 0 1 1 0-1.999h4.657L7.757 9.172a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ArrowCircleDownRightIconFilltone.displayName =
  "ArrowCircleDownRightIconFilltone";
export { ArrowCircleDownRightIconFilltone };
