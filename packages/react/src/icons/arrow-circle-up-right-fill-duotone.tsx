import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCircleUpRightIconFillDuotone = memo(
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
          d="M4.222 4.222c4.295-4.296 11.26-4.296 15.556 0 4.296 4.295 4.296 11.26 0 15.556s-11.26 4.296-15.556 0-4.296-11.26 0-15.556m4.243 3.243a1 1 0 0 0 0 1.999h4.656l-5.363 5.364a1 1 0 1 0 1.414 1.414l5.364-5.363v4.656a1 1 0 1 0 1.999 0v-7.07a1 1 0 0 0-.999-1z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.757 16.243a1 1 0 0 1 0-1.415l5.364-5.364H8.464a1 1 0 1 1 0-2h7.071a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V10.88l-5.364 5.364a1 1 0 0 1-1.414 0"
        />
      </svg>
    ))
);
ArrowCircleUpRightIconFillDuotone.displayName =
  "ArrowCircleUpRightIconFillDuotone";
export { ArrowCircleUpRightIconFillDuotone };
