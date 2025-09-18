import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitLeft = memo(
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
          d="M5 1.25a3.75 3.75 0 0 1 3.675 3H10A2.75 2.75 0 0 1 12.75 7v3c0 .69.56 1.25 1.25 1.25h1.325a3.751 3.751 0 1 1 0 1.5H14c-.69 0-1.25.56-1.25 1.25v3A2.75 2.75 0 0 1 10 19.75H8.675a3.751 3.751 0 1 1 0-1.5H10c.69 0 1.25-.56 1.25-1.25v-3c0-.789.334-1.498.866-2a2.74 2.74 0 0 1-.866-2V7c0-.69-.56-1.25-1.25-1.25H8.675A3.751 3.751 0 1 1 5 1.25m0 15.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m14-7a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-14-7a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        />
      </svg>
    ))
);
FlowSplitLeft.displayName = "FlowSplitLeft";
export { FlowSplitLeft };
