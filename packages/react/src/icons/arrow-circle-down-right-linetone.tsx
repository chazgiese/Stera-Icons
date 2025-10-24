import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleDownRightIconLinetone = memo(
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
          fillRule="evenodd"
          d="M4.222 4.222c4.296-4.296 11.26-4.296 15.556 0s4.296 11.26 0 15.556-11.26 4.296-15.556 0-4.296-11.26 0-15.556m1.414 1.414a9 9 0 1 0 12.728 12.728A9 9 0 0 0 5.636 5.636"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M7.757 7.757a1 1 0 0 1 1.414 0l5.365 5.364V8.464a1 1 0 0 1 2 0v7.071a1 1 0 0 1-1 1H8.463a1 1 0 1 1 0-2h4.657L7.757 9.172a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ArrowCircleDownRightIconLinetone.displayName =
  "ArrowCircleDownRightIconLinetone";
export { ArrowCircleDownRightIconLinetone };
