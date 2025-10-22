import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitSquareRightIcon = memo(
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
          d="M1.25 12a3.75 3.75 0 0 0 7.425.75h2.575V17A2.75 2.75 0 0 0 14 19.75h1.25v.75a2.25 2.25 0 0 0 2.25 2.25h3a2.25 2.25 0 0 0 2.25-2.25v-3a2.25 2.25 0 0 0-2.25-2.25h-3a2.25 2.25 0 0 0-2.25 2.25v.75H14c-.69 0-1.25-.56-1.25-1.25V7c0-.69.56-1.25 1.25-1.25h1.25v.75a2.25 2.25 0 0 0 2.25 2.25h3a2.25 2.25 0 0 0 2.25-2.25v-3a2.25 2.25 0 0 0-2.25-2.25h-3a2.25 2.25 0 0 0-2.25 2.25v.75H14A2.75 2.75 0 0 0 11.25 7v4.25H8.675A3.751 3.751 0 0 0 1.25 12m15.5-8.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75zm0 14a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75zm-14-5.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitSquareRightIcon.displayName = "FlowSplitSquareRightIcon";
export { FlowSplitSquareRightIcon };
