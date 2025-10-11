import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineLeftIconFilled = memo(
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
          d="M4 20a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0zM22 12a1 1 0 0 1-1 1h-7v5a1 1 0 0 1-1.707.707l-6-6a1 1 0 0 1 0-1.414l6-6A1 1 0 0 1 14 6v5h7a1 1 0 0 1 1 1"
        />
      </svg>
    ))
);
ArrowLineLeftIconFilled.displayName = "ArrowLineLeftIconFilled";
export { ArrowLineLeftIconFilled };
