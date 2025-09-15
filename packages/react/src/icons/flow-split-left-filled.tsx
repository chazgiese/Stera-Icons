import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitLeftFilled = memo(
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
          d="M5 1a4 4 0 1 0 3.874 5H10a1 1 0 0 1 1 1v3c0 .77.292 1.469.769 2A2.99 2.99 0 0 0 11 14v3a1 1 0 0 1-1 1H8.874A4.002 4.002 0 0 0 1 19a4 4 0 0 0 7.874 1H10a3 3 0 0 0 3-3v-3a1 1 0 0 1 1-1h1.126A4.002 4.002 0 0 0 23 12a4 4 0 0 0-7.874-1H14a1 1 0 0 1-1-1V7a3 3 0 0 0-3-3H8.874A4 4 0 0 0 5 1"
        />
      </svg>
    ))
);
FlowSplitLeftFilled.displayName = "FlowSplitLeftFilled";
export { FlowSplitLeftFilled };
