import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowDownIconFilltone = memo(
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
          d="M13 12h4a3 3 0 0 1 3 3v3h-2v-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3H4v-3a3 3 0 0 1 3-3h4V8.874a4 4 0 0 0 2 0z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M8 18a1 1 0 0 1 .707 1.707l-3 3a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 2 18zM22 18a1 1 0 0 1 .707 1.707l-3 3a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 16 18zM12 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8"
        />
      </svg>
    ))
);
FlowSplitArrowDownIconFilltone.displayName = "FlowSplitArrowDownIconFilltone";
export { FlowSplitArrowDownIconFilltone };
