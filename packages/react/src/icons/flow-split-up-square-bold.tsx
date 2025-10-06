import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitUpSquareBold = memo(
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
          d="M6.5 1A2.5 2.5 0 0 1 9 3.5v3A2.5 2.5 0 0 1 6.5 9H6v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h-.5A2.5 2.5 0 0 1 15 6.5v-3A2.5 2.5 0 0 1 17.5 1h3A2.5 2.5 0 0 1 23 3.5v3A2.5 2.5 0 0 1 20.5 9H20v1a3 3 0 0 1-3 3h-4v2.126A4.002 4.002 0 0 1 12 23a4 4 0 0 1-1-7.874V13H7a3 3 0 0 1-3-3V9h-.5A2.5 2.5 0 0 1 1 6.5v-3A2.5 2.5 0 0 1 3.5 1zM12 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4M3.5 3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm14 0a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitUpSquareBold.displayName = "FlowSplitUpSquareBold";
export { FlowSplitUpSquareBold };
