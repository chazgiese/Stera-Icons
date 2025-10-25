import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitDownIconFilltone = memo(
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
          d="M12.103 7.005A1 1 0 0 1 13 8v3h4a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0v-2a3 3 0 0 1 3-3h4V8a1 1 0 0 1 1-1z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5 15a4 4 0 1 1 0 8 4 4 0 0 1 0-8M19 15a4 4 0 1 1 0 8 4 4 0 0 1 0-8M12 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8"
        />
      </svg>
    ))
);
FlowSplitDownIconFilltone.displayName = "FlowSplitDownIconFilltone";
export { FlowSplitDownIconFilltone };
