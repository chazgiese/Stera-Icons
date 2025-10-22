import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitRightIconFilled = memo(
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
          d="M19 1a4 4 0 0 0-3.874 3H14a3 3 0 0 0-3 3v4H8.874A4.002 4.002 0 0 0 1 12a4 4 0 0 0 7.874 1H11v4a3 3 0 0 0 3 3h1.126A4.002 4.002 0 0 0 23 19a4 4 0 0 0-7.874-1H14a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.126A4.002 4.002 0 0 0 23 5a4 4 0 0 0-4-4"
        />
      </svg>
    ))
);
FlowSplitRightIconFilled.displayName = "FlowSplitRightIconFilled";
export { FlowSplitRightIconFilled };
