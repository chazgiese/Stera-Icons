import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowUpIconLinetone = memo(
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
          d="M20 4.414V9a3 3 0 0 1-3 3h-4v3.126a4 4 0 0 0-2 0V12H7a3 3 0 0 1-3-3V4.414l1-1 1 1V9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.414l1-1z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.293 5.707a1 1 0 1 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.414L5 3.414zM21.293 5.707a1 1 0 1 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L19 3.414z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitArrowUpIconLinetone.displayName = "FlowSplitArrowUpIconLinetone";
export { FlowSplitArrowUpIconLinetone };
