import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitSquareRightIconFilltone = memo(
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
          d="M7.005 12.103A1 1 0 0 0 8 13h3v4a3 3 0 0 0 3 3h2a1 1 0 1 0 0-2h-2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2h-2a3 3 0 0 0-3 3v4H8a1 1 0 0 0-1 1z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M15 6.5A2.5 2.5 0 0 0 17.5 9h3A2.5 2.5 0 0 0 23 6.5v-3A2.5 2.5 0 0 0 20.5 1h-3A2.5 2.5 0 0 0 15 3.5zM15 20.5a2.5 2.5 0 0 0 2.5 2.5h3a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5h-3a2.5 2.5 0 0 0-2.5 2.5zM1 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0"
        />
      </svg>
    ))
);
FlowSplitSquareRightIconFilltone.displayName =
  "FlowSplitSquareRightIconFilltone";
export { FlowSplitSquareRightIconFilltone };
