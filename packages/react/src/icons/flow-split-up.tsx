import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitUpIcon = memo(
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
          d="M1.25 5a3.75 3.75 0 0 0 3 3.675V10A2.75 2.75 0 0 0 7 12.75h4.25v2.575a3.751 3.751 0 1 0 1.5 0V12.75H17A2.75 2.75 0 0 0 19.75 10V8.675a3.751 3.751 0 1 0-1.5 0V10c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25V8.675A3.751 3.751 0 1 0 1.25 5m15.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m-7 14a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m-7-14a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitUpIcon.displayName = "FlowSplitUpIcon";
export { FlowSplitUpIcon };
