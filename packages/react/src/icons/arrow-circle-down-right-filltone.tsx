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
          fillRule="evenodd"
          d="M4.222 4.222c4.295-4.296 11.26-4.296 15.556 0 4.296 4.295 4.296 11.26 0 15.556-4.295 4.296-11.26 4.296-15.556 0s-4.296-11.26 0-15.556m11.314 3.243a1 1 0 0 0-1 1v4.656L9.172 7.758a1 1 0 1 0-1.414 1.414l5.364 5.364H8.465a1 1 0 1 0 0 1.999h7.071a1 1 0 0 0 1-1v-7.07a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.757 7.757a1 1 0 0 1 1.414 0l5.365 5.364V8.464a1 1 0 0 1 2 0v7.071a1 1 0 0 1-1 1H8.463a1 1 0 1 1 0-2h4.657L7.757 9.172a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ArrowCircleDownRightIconFilltone.displayName =
  "ArrowCircleDownRightIconFilltone";
export { ArrowCircleDownRightIconFilltone };
