import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpRightDownLeft = memo(
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
          d="M20 3.25a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0V5.81L5.81 19.25H11a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 1.5 0v5.19L18.19 4.75H13a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ArrowUpRightDownLeft.displayName = "ArrowUpRightDownLeft";
export { ArrowUpRightDownLeft };
