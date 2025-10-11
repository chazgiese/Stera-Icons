import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitLeftIconFilled = memo(
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
          d="M5 1a4 4 0 0 1 3.874 3H10a3 3 0 0 1 3 3v4h2.126A4.002 4.002 0 0 1 23 12a4 4 0 0 1-7.874 1H13v4a3 3 0 0 1-3 3H8.874A4.002 4.002 0 0 1 1 19a4 4 0 0 1 7.874-1H10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H8.874A4.002 4.002 0 0 1 1 5a4 4 0 0 1 4-4"
        />
      </svg>
    ))
);
FlowSplitLeftIconFilled.displayName = "FlowSplitLeftIconFilled";
export { FlowSplitLeftIconFilled };
