import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleUpRightIconLinetone = memo(
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
          d="M4.222 19.778c-4.296-4.296-4.296-11.26 0-15.556s11.26-4.296 15.556 0 4.296 11.26 0 15.556-11.26 4.296-15.556 0m1.414-1.414A9 9 0 1 0 18.364 5.636 9 9 0 0 0 5.636 18.364"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M7.757 16.243a1 1 0 0 1 0-1.414l5.364-5.364H8.464a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.07a1 1 0 1 1-2 0V10.88l-5.364 5.364a1 1 0 0 1-1.415 0"
        />
      </svg>
    ))
);
ArrowCircleUpRightIconLinetone.displayName = "ArrowCircleUpRightIconLinetone";
export { ArrowCircleUpRightIconLinetone };
