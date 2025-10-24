import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowUpArrowIconLinetone = memo(
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
          d="M11 2a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M6.293 7.707a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 3.414 7.707 7.707a1 1 0 0 1-1.414 0"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7 18a5 5 0 1 1 10 0 5 5 0 0 1-10 0m2 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowUpArrowIconLinetone.displayName = "FlowUpArrowIconLinetone";
export { FlowUpArrowIconLinetone };
