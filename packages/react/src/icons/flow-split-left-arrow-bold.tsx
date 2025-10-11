import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitLeftArrowIconBold = memo(
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
          fillRule="evenodd"
          d="M4.293 1.293a1 1 0 1 1 1.414 1.414L4.414 4H7a5 5 0 0 1 5 5v2h3.126A4.002 4.002 0 0 1 23 12a4 4 0 0 1-7.874 1H12v2a5 5 0 0 1-5 5H4.414l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1-.153-.2.99.99 0 0 1 .153-1.214l3-3a1 1 0 1 1 1.414 1.414L4.414 18H7a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H4.414l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1-.148-.192.99.99 0 0 1 .148-1.222zM19 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitLeftArrowIconBold.displayName = "FlowSplitLeftArrowIconBold";
export { FlowSplitLeftArrowIconBold };
