import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpLeftDownRightIconFillDuotone = memo(
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
          d="M19.293 12.793A1 1 0 0 1 21 13.5V20a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-.707-1.707zM10.5 3a1 1 0 0 1 .707 1.707l-6.5 6.5A1 1 0 0 1 3 10.5V4a1 1 0 0 1 1-1z"
        />
        <path
          fill="currentColor"
          d="m16.75 15.336-1.414 1.414L7.25 8.664 8.664 7.25z"
          opacity={0.4}
        />
      </svg>
    ))
);
ArrowUpLeftDownRightIconFillDuotone.displayName =
  "ArrowUpLeftDownRightIconFillDuotone";
export { ArrowUpLeftDownRightIconFillDuotone };
