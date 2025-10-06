import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitRightFilled = memo(
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
          d="M19 1a4 4 0 1 1-3.874 5H14a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.126A4.002 4.002 0 0 1 23 19a4 4 0 0 1-7.874 1H14a3 3 0 0 1-3-3v-4H8.874A4.002 4.002 0 0 1 1 12a4 4 0 0 1 7.874-1H11V7a3 3 0 0 1 3-3h1.126c.444-1.725 2.01-3 3.874-3"
        />
      </svg>
    ))
);
FlowSplitRightFilled.displayName = "FlowSplitRightFilled";
export { FlowSplitRightFilled };
