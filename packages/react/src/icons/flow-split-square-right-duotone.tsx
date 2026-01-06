import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitSquareRightIconDuotone = memo(
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
          d="M15.25 5.75H14c-.69 0-1.25.56-1.25 1.25v10l.007.128A1.25 1.25 0 0 0 14 18.25h1.25v1.5H14A2.75 2.75 0 0 1 11.25 17v-4.25H8.675a3.8 3.8 0 0 0 0-1.5h2.575V7A2.75 2.75 0 0 1 14 4.25h1.25z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.5 15.25a2.25 2.25 0 0 1 2.25 2.25v3a2.25 2.25 0 0 1-2.25 2.25h-3a2.25 2.25 0 0 1-2.25-2.25v-3a2.25 2.25 0 0 1 2.25-2.25zm-3 1.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75zM5 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M20.5 1.25a2.25 2.25 0 0 1 2.25 2.25v3a2.25 2.25 0 0 1-2.25 2.25h-3a2.25 2.25 0 0 1-2.25-2.25v-3a2.25 2.25 0 0 1 2.25-2.25zm-3 1.5a.75.75 0 0 0-.75.75v3l.004.077a.75.75 0 0 0 .746.673h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitSquareRightIconDuotone.displayName = "FlowSplitSquareRightIconDuotone";
export { FlowSplitSquareRightIconDuotone };
