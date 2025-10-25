import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleDownLeftIconFilltone = memo(
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
          d="M19.778 4.222c4.296 4.296 4.296 11.26 0 15.556s-11.26 4.296-15.556 0-4.296-11.26 0-15.556 11.26-4.296 15.556 0"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.243 7.757a1 1 0 0 1 0 1.415l-5.364 5.364h4.657a1 1 0 1 1 0 2H8.464a1 1 0 0 1-1-1V8.465a1 1 0 1 1 2 0v4.656l5.365-5.364a1 1 0 0 1 1.414 0"
        />
      </svg>
    ))
);
ArrowCircleDownLeftIconFilltone.displayName = "ArrowCircleDownLeftIconFilltone";
export { ArrowCircleDownLeftIconFilltone };
