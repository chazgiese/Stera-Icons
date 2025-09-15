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
          d="M3.5 1A2.5 2.5 0 0 0 1 3.5v3A2.5 2.5 0 0 0 3.5 9h3A2.5 2.5 0 0 0 9 6.5V6h1a1 1 0 0 1 1 1v3c0 .77.292 1.469.769 2A2.99 2.99 0 0 0 11 14v3a1 1 0 0 1-1 1H9v-.5A2.5 2.5 0 0 0 6.5 15h-3A2.5 2.5 0 0 0 1 17.5v3A2.5 2.5 0 0 0 3.5 23h3A2.5 2.5 0 0 0 9 20.5V20h1a3 3 0 0 0 3-3v-3a1 1 0 0 1 1-1h1.126A4.002 4.002 0 0 0 23 12a4 4 0 0 0-7.874-1H14a1 1 0 0 1-1-1V7a3 3 0 0 0-3-3H9v-.5A2.5 2.5 0 0 0 6.5 1zm3 16a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5zM19 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M6.5 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitLeftSquare.displayName = "FlowSplitLeftSquare";
export { FlowSplitLeftSquare };
