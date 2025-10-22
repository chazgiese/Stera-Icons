import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpRightDownLeftIconLinetone = memo(
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
          d="m20.707 4.707-16 16-1.414-1.414 16-16z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M4 12.5a1 1 0 0 1 1 1V19h5.5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1v-6.5a1 1 0 0 1 1-1M20 3a1 1 0 0 1 1 1v6.5a1 1 0 1 1-2 0V5h-5.5a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ArrowUpRightDownLeftIconLinetone.displayName =
  "ArrowUpRightDownLeftIconLinetone";
export { ArrowUpRightDownLeftIconLinetone };
