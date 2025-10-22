import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitUpIconFilled = memo(
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
          d="M1 5a4 4 0 0 0 3 3.874V10a3 3 0 0 0 3 3h4v2.126A4.002 4.002 0 0 0 12 23a4 4 0 0 0 1-7.874V13h4a3 3 0 0 0 3-3V8.874A4.002 4.002 0 0 0 19 1a4 4 0 0 0-1 7.874V10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8.874A4.002 4.002 0 0 0 5 1a4 4 0 0 0-4 4"
        />
      </svg>
    ))
);
FlowSplitUpIconFilled.displayName = "FlowSplitUpIconFilled";
export { FlowSplitUpIconFilled };
