import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowDownIconLinetone = memo(
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
          d="M13 12h4a3 3 0 0 1 3 3v4.586l-1 1-1-1V15a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4.586l-1 1-1-1V15a3 3 0 0 1 3-3h4V8.874a4 4 0 0 0 2 0z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.293 18.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L5 20.586zM21.293 18.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L19 20.586z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitArrowDownIconLinetone.displayName = "FlowSplitArrowDownIconLinetone";
export { FlowSplitArrowDownIconLinetone };
