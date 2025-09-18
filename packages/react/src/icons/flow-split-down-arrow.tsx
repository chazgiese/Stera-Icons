import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitDownArrow = memo(
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
          d="M12 1.25a3.75 3.75 0 0 1 .75 7.425V9.5a2.75 2.75 0 0 0 2.75 2.75 4.25 4.25 0 0 1 4.25 4.25v1.75H22a.75.75 0 0 1 .53 1.28l-3 3a.75.75 0 0 1-.383.204l-.005.001a1 1 0 0 1-.142.015 1 1 0 0 1-.14-.015h-.01a.7.7 0 0 1-.245-.1l-.023-.013a1 1 0 0 1-.113-.092l-3-3a.75.75 0 0 1 .53-1.28h2.25V16.5a2.75 2.75 0 0 0-2.75-2.75 4.24 4.24 0 0 1-3.5-1.84 4.25 4.25 0 0 1-3.5 1.84 2.75 2.75 0 0 0-2.75 2.75v1.75H8a.75.75 0 0 1 .531 1.28l-3 3a.75.75 0 0 1-.383.204l-.005.001a.757.757 0 0 1-.283 0H4.85a.7.7 0 0 1-.245-.1l-.023-.013a1 1 0 0 1-.113-.092l-3-3A.75.75 0 0 1 2 18.25h2.25V16.5a4.25 4.25 0 0 1 4.25-4.25 2.75 2.75 0 0 0 2.75-2.75v-.825A3.751 3.751 0 0 1 12 1.25m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitDownArrow.displayName = "FlowSplitDownArrow";
export { FlowSplitDownArrow };
