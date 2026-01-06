import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitArrowDownIconFill = memo(
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
          d="M12 1a4 4 0 0 1 1 7.874V12h4a3 3 0 0 1 3 3v3h2a1 1 0 0 1 .707 1.707l-3 3a.995.995 0 0 1-.414.25l-.047.01q-.023.008-.048.013l-.026.003Q19.088 23 19 23q-.088-.001-.173-.017l-.026-.003-.048-.012q-.024-.005-.047-.012a1 1 0 0 1-.413-.249l-3-3A1 1 0 0 1 16 18h2v-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3h2a1 1 0 0 1 .707 1.707l-3 3a.996.996 0 0 1-.414.25l-.047.01q-.024.008-.048.013l-.026.003Q5.088 23 5 23q-.089-.001-.173-.017l-.026-.003-.048-.012-.047-.012a1 1 0 0 1-.413-.249l-3-3A1 1 0 0 1 2 18h2v-3a3 3 0 0 1 3-3h4V8.874A4.002 4.002 0 0 1 12 1"
        />
      </svg>
    ))
);
FlowSplitArrowDownIconFill.displayName = "FlowSplitArrowDownIconFill";
export { FlowSplitArrowDownIconFill };
