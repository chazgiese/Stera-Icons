import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowMergeIconLinetone = memo(
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
          <path d="M7.793 13.793a1 1 0 1 1 1.414 1.414l-6.5 6.5a1 1 0 0 1-1.414-1.414zM1.293 2.293a1 1 0 0 1 1.414 0L9.95 9.535A5 5 0 0 0 13.486 11H21a1 1 0 0 1 0 2h-7.514a7 7 0 0 1-4.95-2.05L1.292 3.707a1 1 0 0 1 0-1.414" />
        </g>
        <path
          fill="currentColor"
          d="M16.793 7.793a1 1 0 0 1 1.414 0l3.535 3.535a1 1 0 0 1-.007 1.421L18.2 16.214a.999.999 0 1 1-1.398-1.428l2.813-2.758-2.82-2.82a1 1 0 0 1 0-1.415"
        />
      </svg>
    ))
);
FlowMergeIconLinetone.displayName = "FlowMergeIconLinetone";
export { FlowMergeIconLinetone };
