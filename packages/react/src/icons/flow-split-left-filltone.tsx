import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitLeftIconFilltone = memo(
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
          d="M10 4a3 3 0 0 1 3 3v4h3a1 1 0 1 1 0 2h-3v4a3 3 0 0 1-3 3H8a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H8a1 1 0 0 1 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5 15a4 4 0 1 1 0 8 4 4 0 0 1 0-8M19 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8M5 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8"
        />
      </svg>
    ))
);
FlowSplitLeftIconFilltone.displayName = "FlowSplitLeftIconFilltone";
export { FlowSplitLeftIconFilltone };
