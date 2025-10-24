import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowUpArrowIcon = memo(
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
          d="M6.47 7.53a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72v9.5a4.75 4.75 0 1 1-1.5 0v-9.5L7.53 7.53a.75.75 0 0 1-1.06 0M8.75 18a3.25 3.25 0 1 0 6.5 0 3.25 3.25 0 0 0-6.5 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowUpArrowIcon.displayName = "FlowUpArrowIcon";
export { FlowUpArrowIcon };
