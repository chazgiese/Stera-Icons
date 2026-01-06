import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitSquareLeftIconDuotone = memo(
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
          d="M10 4.25A2.75 2.75 0 0 1 12.75 7v4.25h2.575a3.8 3.8 0 0 0 0 1.5H12.75V17a2.75 2.75 0 0 1-2.469 2.735L10 19.75H8.75v-1.5H10a1.25 1.25 0 0 0 1.243-1.122L11.25 17V7a1.25 1.25 0 0 0-1.122-1.243L10 5.75H8.75v-1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.5 15.25a2.25 2.25 0 0 1 2.25 2.25v3a2.25 2.25 0 0 1-2.25 2.25h-3a2.25 2.25 0 0 1-2.25-2.25v-3a2.25 2.25 0 0 1 2.25-2.25zm-3 1.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3l-.004-.077a.75.75 0 0 0-.669-.67L6.5 16.75zM19 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M6.5 1.25A2.25 2.25 0 0 1 8.75 3.5v3a2.25 2.25 0 0 1-2.02 2.238l-.23.012h-3a2.25 2.25 0 0 1-2.238-2.02L1.25 6.5v-3A2.25 2.25 0 0 1 3.5 1.25zm-3 1.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .746-.673L7.25 6.5v-3l-.004-.077A.75.75 0 0 0 6.5 2.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitSquareLeftIconDuotone.displayName = "FlowSplitSquareLeftIconDuotone";
export { FlowSplitSquareLeftIconDuotone };
