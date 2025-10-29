import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowBranchIconFilltone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M13.793 13.793a1 1 0 0 1 1.414 0l3.293 3.293-1.414 1.414-3.293-3.293a1 1 0 0 1 0-1.414M18.5 6.914l-4.035 4.036A7 7 0 0 1 9.515 13H2a1 1 0 0 1 0-2h7.515a5 5 0 0 0 3.535-1.465L17.085 5.5z" />
        </g>
        <path
          fill="currentColor"
          d="M20.293 15.293A1 1 0 0 1 22 16v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-.707-1.707zM21 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1.707.707l-5-5A1 1 0 0 1 16 2z"
        />
      </svg>
    ))
);
FlowBranchIconFilltone.displayName = "FlowBranchIconFilltone";
export { FlowBranchIconFilltone };
