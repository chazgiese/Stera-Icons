import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowDiagramIconFilled = memo(
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
          d="M10 1a1 1 0 0 1 1 1v1h6a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.086l-3.207 3.208a1 1 0 0 1-1.414 0L8.086 13H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H7a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1.086l3.207-3.207a1 1 0 0 1 1.414 0L15.914 11H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
        />
      </svg>
    ))
);
FlowDiagramIconFilled.displayName = "FlowDiagramIconFilled";
export { FlowDiagramIconFilled };
