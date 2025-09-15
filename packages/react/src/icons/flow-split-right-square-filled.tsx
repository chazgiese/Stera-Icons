import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitRightSquareFilled = memo(
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
          d="M21.204 1.01A2 2 0 0 1 23 3v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.99-1.796L15 7V6h-1a1 1 0 0 0-1 1v3c0 .77-.292 1.469-.769 2 .477.531.769 1.23.769 2v3a1 1 0 0 0 1 1h1v-1a2 2 0 0 1 2-2h4l.204.01A2 2 0 0 1 23 17v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.99-1.796L15 21v-1h-1a3 3 0 0 1-3-3v-3a1 1 0 0 0-1-1H8.874A4.002 4.002 0 0 1 1 12a4 4 0 0 1 7.874-1H10a1 1 0 0 0 1-1V7a3 3 0 0 1 3-3h1V3a2 2 0 0 1 2-2h4z"
        />
      </svg>
    ))
);
FlowSplitRightSquareFilled.displayName = "FlowSplitRightSquareFilled";
export { FlowSplitRightSquareFilled };
