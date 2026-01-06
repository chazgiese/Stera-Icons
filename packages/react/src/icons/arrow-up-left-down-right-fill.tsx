import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpLeftDownRightIconFill = memo(
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
          d="M10.5 3a1 1 0 0 1 .707 1.707L8.664 7.25l8.086 8.086 2.543-2.543A1 1 0 0 1 21 13.5V20a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-.707-1.707l2.543-2.543L7.25 8.664l-2.543 2.543A1 1 0 0 1 3 10.5V4a1 1 0 0 1 1-1z"
        />
      </svg>
    ))
);
ArrowUpLeftDownRightIconFill.displayName = "ArrowUpLeftDownRightIconFill";
export { ArrowUpLeftDownRightIconFill };
