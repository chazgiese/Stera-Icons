import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitRightArrowFilled = memo(
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
          d="M18.617 1.076a1 1 0 0 1 1.09.217l3 3a.997.997 0 0 1 0 1.414l-3 3A1 1 0 0 1 18 8V6h-1a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h1v-2a1 1 0 0 1 1.707-.707l3 3a.997.997 0 0 1 0 1.414l-3 3A1 1 0 0 1 18 22v-2h-1a5 5 0 0 1-5-5v-2H8.874A4.002 4.002 0 0 1 1 12a4 4 0 0 1 7.874-1H12V9a5 5 0 0 1 5-5h1V2a1 1 0 0 1 .617-.924"
        />
      </svg>
    ))
);
FlowSplitRightArrowFilled.displayName = "FlowSplitRightArrowFilled";
export { FlowSplitRightArrowFilled };
