import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowRotateLeft = memo(
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
          d="M10.47.47a.75.75 0 1 1 1.06 1.06L8.81 4.25H12A8.75 8.75 0 1 1 3.25 13a.75.75 0 1 1 1.5 0A7.25 7.25 0 1 0 12 5.75H8.81l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06z"
        />
      </svg>
    ))
);
ArrowRotateLeft.displayName = "ArrowRotateLeft";
export { ArrowRotateLeft };
