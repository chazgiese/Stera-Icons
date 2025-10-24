import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowRightIconLinetone = memo(
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
          d="M7 12a1 1 0 0 0 1 1h4v4a3 3 0 0 0 3 3h7a1 1 0 1 0 0-2h-7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7a1 1 0 1 0 0-2h-7a3 3 0 0 0-3 3v4H8a1 1 0 0 0-1 1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M18.293 7.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L20.586 5zM18.293 21.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L20.586 19z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0m2 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitArrowRightIconLinetone.displayName = "FlowSplitArrowRightIconLinetone";
export { FlowSplitArrowRightIconLinetone };
