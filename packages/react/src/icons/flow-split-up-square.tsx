import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitUpSquareIcon = memo(
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
          d="M6.5 1.25A2.25 2.25 0 0 1 8.75 3.5v3A2.25 2.25 0 0 1 6.5 8.75h-.75V10c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V8.75h-.75a2.25 2.25 0 0 1-2.25-2.25v-3a2.25 2.25 0 0 1 2.25-2.25h3a2.25 2.25 0 0 1 2.25 2.25v3a2.25 2.25 0 0 1-2.25 2.25h-.75V10A2.75 2.75 0 0 1 17 12.75h-4.25v2.574A3.752 3.752 0 0 1 12 22.75a3.75 3.75 0 0 1-.75-7.426V12.75H7A2.75 2.75 0 0 1 4.25 10V8.75H3.5A2.25 2.25 0 0 1 1.25 6.5v-3A2.25 2.25 0 0 1 3.5 1.25zm5.5 15.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-8.5-14a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75zm14 0a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitUpSquareIcon.displayName = "FlowSplitUpSquareIcon";
export { FlowSplitUpSquareIcon };
