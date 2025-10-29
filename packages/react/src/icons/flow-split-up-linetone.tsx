import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitUpIconLinetone = memo(
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
          d="M20 10a3 3 0 0 1-3 3h-4v2.126a4 4 0 0 0-2 0V13H7a3 3 0 0 1-3-3V8.874a4 4 0 0 0 2 0V10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8.874a4 4 0 0 0 2 0z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15 5a4 4 0 1 0 8 0 4 4 0 0 0-8 0m2 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0M8 19a4 4 0 1 0 8 0 4 4 0 0 0-8 0m2 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0M1 5a4 4 0 1 0 8 0 4 4 0 0 0-8 0m2 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitUpIconLinetone.displayName = "FlowSplitUpIconLinetone";
export { FlowSplitUpIconLinetone };
