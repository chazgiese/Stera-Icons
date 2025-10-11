import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowUpArrowIconBold = memo(
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
          d="M17.707 7.707a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 4.414v8.687A5.001 5.001 0 0 0 12 23a5 5 0 0 0 1-9.9V4.415l3.293 3.293a1 1 0 0 0 1.414 0M15 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowUpArrowIconBold.displayName = "FlowUpArrowIconBold";
export { FlowUpArrowIconBold };
