import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitDownFilled = memo(
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
          d="M1 19a4 4 0 1 0 5-3.874V14a1 1 0 0 1 1-1h3c.77 0 1.469-.292 2-.769.531.477 1.23.769 2 .769h3a1 1 0 0 1 1 1v1.126A4.002 4.002 0 0 0 19 23a4 4 0 0 0 1-7.874V14a3 3 0 0 0-3-3h-3a1 1 0 0 1-1-1V8.874A4.002 4.002 0 0 0 12 1a4 4 0 0 0-1 7.874V10a1 1 0 0 1-1 1H7a3 3 0 0 0-3 3v1.126c-1.725.444-3 2.01-3 3.874"
        />
      </svg>
    ))
);
FlowSplitDownFilled.displayName = "FlowSplitDownFilled";
export { FlowSplitDownFilled };
