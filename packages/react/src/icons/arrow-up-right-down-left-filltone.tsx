import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpRightDownLeftIconFilltone = memo(
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
          d="M3.617 12.576a1 1 0 0 1 1.09.217l6.5 6.5A1 1 0 0 1 10.5 21H4a1 1 0 0 1-1-1v-6.5a1 1 0 0 1 .617-.924M20 3a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1.707.707l-6.5-6.5A1 1 0 0 1 13.5 3z"
        />
      </svg>
    ))
);
ArrowUpRightDownLeftIconFilltone.displayName =
  "ArrowUpRightDownLeftIconFilltone";
export { ArrowUpRightDownLeftIconFilltone };
