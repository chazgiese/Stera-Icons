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
          d="M20.5 1A2.5 2.5 0 0 1 23 3.5v3A2.5 2.5 0 0 1 20.5 9h-3A2.5 2.5 0 0 1 15 6.5V6h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1v-.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5V20h-1a3 3 0 0 1-3-3v-4H8.874A4.002 4.002 0 0 1 1 12a4 4 0 0 1 7.874-1H11V7a3 3 0 0 1 3-3h1v-.5A2.5 2.5 0 0 1 17.5 1z"
        />
      </svg>
    ))
);
FlowSplitRightSquareFilled.displayName = "FlowSplitRightSquareFilled";
export { FlowSplitRightSquareFilled };
