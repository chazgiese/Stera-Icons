import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowBigRightIconLinetone = memo(
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
          d="M10.5 7a1 1 0 1 1 0 2H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4.5a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3z"
          opacity={0.32}
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.5 16v4.793a.5.5 0 0 0 .854.353l8.262-8.262a1.25 1.25 0 0 0 0-1.768l-8.262-8.262a.5.5 0 0 0-.854.353V8"
        />
      </svg>
    ))
);
ArrowBigRightIconLinetone.displayName = "ArrowBigRightIconLinetone";
export { ArrowBigRightIconLinetone };
