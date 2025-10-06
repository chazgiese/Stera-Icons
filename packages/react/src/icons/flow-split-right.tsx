import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitRight = memo(
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
          d="M19 1.25a3.75 3.75 0 1 1-3.675 4.5H14c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h1.325a3.751 3.751 0 1 1 0 1.5H14A2.75 2.75 0 0 1 11.25 17v-4.25H8.675a3.751 3.751 0 1 1 0-1.5h2.575V7A2.75 2.75 0 0 1 14 4.25h1.325c.348-1.712 1.86-3 3.675-3m0 15.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-14-7a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m14-7a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitRight.displayName = "FlowSplitRight";
export { FlowSplitRight };
