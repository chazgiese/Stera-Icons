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
          d="M6.293 7.707a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 1 1-1.414 1.414L13 4.414v8.687A5.001 5.001 0 0 1 12 23a5 5 0 0 1-1-9.9V4.415L7.707 7.707a1 1 0 0 1-1.414 0M9 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowUpArrowIconBold.displayName = "FlowUpArrowIconBold";
export { FlowUpArrowIconBold };
