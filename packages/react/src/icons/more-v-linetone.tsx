import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoreVIconLinetone = memo(
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
          d="M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        />
        <path
          fill="currentColor"
          d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
          opacity={0.32}
        />
      </svg>
    ))
);
MoreVIconLinetone.displayName = "MoreVIconLinetone";
export { MoreVIconLinetone };
