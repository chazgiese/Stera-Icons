import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanIconFilled = memo(
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
          d="M21 15v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3zM23 11a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zM18 3a3 3 0 0 1 3 3v3H3V6a3 3 0 0 1 3-3z"
        />
      </svg>
    ))
);
ScanIconFilled.displayName = "ScanIconFilled";
export { ScanIconFilled };
