import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowBranchIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M13.793 13.793a1 1 0 0 1 1.414 0l6.5 6.5a1 1 0 0 1-1.414 1.414l-6.5-6.5a1 1 0 0 1 0-1.414M20.293 2.293a1 1 0 1 1 1.414 1.414l-7.242 7.243A7 7 0 0 1 9.515 13H2a1 1 0 0 1 0-2h7.515a5 5 0 0 0 3.535-1.465z" />
        </g>
        <path
          fill="currentColor"
          d="M21 15a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h4v-4a1 1 0 0 1 1-1M21 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V4h-4a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
FlowBranchIconLinetone.displayName = "FlowBranchIconLinetone";
export { FlowBranchIconLinetone };
