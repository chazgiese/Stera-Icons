import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitLeftSquare = memo(
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
          d="M6.5 1.25A2.25 2.25 0 0 1 8.75 3.5v.75H10A2.75 2.75 0 0 1 12.75 7v3c0 .69.56 1.25 1.25 1.25h1.325a3.751 3.751 0 1 1 0 1.5H14c-.69 0-1.25.56-1.25 1.25v3A2.75 2.75 0 0 1 10 19.75H8.75v.75a2.25 2.25 0 0 1-2.25 2.25h-3a2.25 2.25 0 0 1-2.25-2.25v-3a2.25 2.25 0 0 1 2.25-2.25h3a2.25 2.25 0 0 1 2.25 2.25v.75H10c.69 0 1.25-.56 1.25-1.25v-3c0-.789.334-1.498.866-2a2.74 2.74 0 0 1-.866-2V7c0-.69-.56-1.25-1.25-1.25H8.75v.75A2.25 2.25 0 0 1 6.5 8.75h-3A2.25 2.25 0 0 1 1.25 6.5v-3A2.25 2.25 0 0 1 3.5 1.25zm-3 15.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75zm15.5-7a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-15.5-7a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitLeftSquare.displayName = "FlowSplitLeftSquare";
export { FlowSplitLeftSquare };
