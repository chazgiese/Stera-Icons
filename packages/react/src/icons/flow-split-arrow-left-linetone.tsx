import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowLeftIconLinetone = memo(
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
          d="M17 12a1 1 0 0 1-1 1h-4v4a3 3 0 0 1-3 3H2a1 1 0 0 1 0-2h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H2a1 1 0 0 1 0-2h7a3 3 0 0 1 3 3v4h4a1 1 0 0 1 1 1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M5.707 7.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L3.414 5zM5.707 21.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414L3.414 19z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M23 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitArrowLeftIconLinetone.displayName = "FlowSplitArrowLeftIconLinetone";
export { FlowSplitArrowLeftIconLinetone };
