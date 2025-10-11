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
          d="M19 1.25a3.75 3.75 0 0 1 .75 7.425V10A2.75 2.75 0 0 1 17 12.75h-4.25v2.574A3.752 3.752 0 0 1 12 22.75a3.75 3.75 0 0 1-.75-7.426V12.75H7A2.75 2.75 0 0 1 4.25 10V8.675a3.751 3.751 0 1 1 1.5 0V10c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V8.675A3.751 3.751 0 0 1 19 1.25m-7 15.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-7-14a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m14 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitUpIcon.displayName = "FlowSplitUpIcon";
export { FlowSplitUpIcon };
