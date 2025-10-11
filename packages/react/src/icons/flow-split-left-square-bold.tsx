import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlowSplitLeftSquareIconBold = memo(
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
          d="M6.5 1A2.5 2.5 0 0 1 9 3.5V4h1a3 3 0 0 1 3 3v4h2.126A4.002 4.002 0 0 1 23 12a4 4 0 0 1-7.874 1H13v4a3 3 0 0 1-3 3H9v.5A2.5 2.5 0 0 1 6.5 23h-3A2.5 2.5 0 0 1 1 20.5v-3A2.5 2.5 0 0 1 3.5 15h3A2.5 2.5 0 0 1 9 17.5v.5h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9v.5A2.5 2.5 0 0 1 6.5 9h-3A2.5 2.5 0 0 1 1 6.5v-3A2.5 2.5 0 0 1 3.5 1zm-3 16a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM19 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4M3.5 3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FlowSplitLeftSquareIconBold.displayName = "FlowSplitLeftSquareIconBold";
export { FlowSplitLeftSquareIconBold };
