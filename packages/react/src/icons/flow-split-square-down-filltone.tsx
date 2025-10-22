import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitSquareDownIconFilltone = memo(
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
          d="M12.103 7.005A1 1 0 0 1 13 8v3h4a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0v-2a3 3 0 0 1 3-3h4V8a1 1 0 0 1 1-1z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M6.5 15A2.5 2.5 0 0 1 9 17.5v3A2.5 2.5 0 0 1 6.5 23h-3A2.5 2.5 0 0 1 1 20.5v-3A2.5 2.5 0 0 1 3.5 15zM20.5 15a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5v-3a2.5 2.5 0 0 1 2.5-2.5zM12 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8"
        />
      </svg>
    ))
);
FlowSplitSquareDownIconFilltone.displayName = "FlowSplitSquareDownIconFilltone";
export { FlowSplitSquareDownIconFilltone };
