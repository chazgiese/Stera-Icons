import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitSquareUpIconFilltone = memo(
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
          d="M12.103 16.995A1 1 0 0 0 13 16v-3h4a3 3 0 0 0 3-3V8a1 1 0 1 0-2 0v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 0-2 0v2a3 3 0 0 0 3 3h4v3a1 1 0 0 0 1 1z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6.5 9A2.5 2.5 0 0 0 9 6.5v-3A2.5 2.5 0 0 0 6.5 1h-3A2.5 2.5 0 0 0 1 3.5v3A2.5 2.5 0 0 0 3.5 9zM20.5 9A2.5 2.5 0 0 0 23 6.5v-3A2.5 2.5 0 0 0 20.5 1h-3A2.5 2.5 0 0 0 15 3.5v3A2.5 2.5 0 0 0 17.5 9zM12 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
        />
      </svg>
    ))
);
FlowSplitSquareUpIconFilltone.displayName = "FlowSplitSquareUpIconFilltone";
export { FlowSplitSquareUpIconFilltone };
