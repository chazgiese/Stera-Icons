import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitSquareRightIconFilled = memo(
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
          d="M1 12a4 4 0 0 0 7.874 1H11v4a3 3 0 0 0 3 3h1v.5a2.5 2.5 0 0 0 2.5 2.5h3a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5h-3a2.5 2.5 0 0 0-2.5 2.5v.5h-1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1v.5A2.5 2.5 0 0 0 17.5 9h3A2.5 2.5 0 0 0 23 6.5v-3A2.5 2.5 0 0 0 20.5 1h-3A2.5 2.5 0 0 0 15 3.5V4h-1a3 3 0 0 0-3 3v4H8.874A4.002 4.002 0 0 0 1 12"
        />
      </svg>
    ))
);
FlowSplitSquareRightIconFilled.displayName = "FlowSplitSquareRightIconFilled";
export { FlowSplitSquareRightIconFilled };
