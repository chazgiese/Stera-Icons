import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitSquareLeftIconFillDuotone = memo(
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
          d="M10 4a3 3 0 0 1 3 3v4h2.126a4 4 0 0 0 0 2H13v4a3 3 0 0 1-3 3H9v-2h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9V4z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9 6.5A2.5 2.5 0 0 1 6.5 9h-3A2.5 2.5 0 0 1 1 6.5v-3A2.5 2.5 0 0 1 3.5 1h3A2.5 2.5 0 0 1 9 3.5zM9 20.5A2.5 2.5 0 0 1 6.5 23h-3A2.5 2.5 0 0 1 1 20.5v-3A2.5 2.5 0 0 1 3.5 15h3A2.5 2.5 0 0 1 9 17.5zM23 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
        />
      </svg>
    ))
);
FlowSplitSquareLeftIconFillDuotone.displayName =
  "FlowSplitSquareLeftIconFillDuotone";
export { FlowSplitSquareLeftIconFillDuotone };
