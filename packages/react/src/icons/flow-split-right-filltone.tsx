import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitRightIconFilltone = memo(
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
          d="M19 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8M5 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M19 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
        />
        <path
          fill="currentColor"
          d="M15.126 4a4 4 0 0 0 0 2H14a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.126a4 4 0 0 0 0 2H14a3 3 0 0 1-3-3v-4H8.874a4 4 0 0 0 0-2H11V7a3 3 0 0 1 3-3z"
          opacity={0.4}
        />
      </svg>
    ))
);
FlowSplitRightIconFilltone.displayName = "FlowSplitRightIconFilltone";
export { FlowSplitRightIconFilltone };
