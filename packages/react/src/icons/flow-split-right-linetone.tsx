import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitRightIconLinetone = memo(
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
          d="M14 4a3 3 0 0 0-3 3v4H8a1 1 0 1 0 0 2h3v4a3 3 0 0 0 3 3h2a1 1 0 1 0 0-2h-2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4M19 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitRightIconLinetone.displayName = "FlowSplitRightIconLinetone";
export { FlowSplitRightIconLinetone };
