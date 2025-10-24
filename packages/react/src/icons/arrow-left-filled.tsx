import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLeftIconFilled = memo(
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
          d="M10.293 5.293A1 1 0 0 1 12 6v5h7a1 1 0 1 1 0 2h-7v5a1 1 0 0 1-1.707.707l-6-6a1 1 0 0 1-.148-.192.994.994 0 0 1 .148-1.222z"
        />
        <path
          fill="currentColor"
          d="M10.293 5.293A1 1 0 0 1 12 6v5h7a1 1 0 1 1 0 2h-7v5a1 1 0 0 1-1.707.707l-6-6a1 1 0 0 1-.148-.192.99.99 0 0 1 .148-1.222z"
        />
      </svg>
    ))
);
ArrowLeftIconFilled.displayName = "ArrowLeftIconFilled";
export { ArrowLeftIconFilled };
