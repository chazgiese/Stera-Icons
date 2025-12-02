import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartWaterfallXIconFilled = memo(
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
          d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM6 7.852c.966 0 1.75.783 1.75 1.75v6A1.75 1.75 0 0 1 6 17.352H4a1.75 1.75 0 0 1-1.75-1.75v-6c0-.967.784-1.75 1.75-1.75zM20 3.25c.966 0 1.75.784 1.75 1.75v8A1.75 1.75 0 0 1 20 14.75h-2A1.75 1.75 0 0 1 16.25 13V5c0-.966.784-1.75 1.75-1.75zM13 6.25c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 13 13.75h-2A1.75 1.75 0 0 1 9.25 12V8c0-.966.784-1.75 1.75-1.75z"
        />
      </svg>
    ))
);
ChartWaterfallXIconFilled.displayName = "ChartWaterfallXIconFilled";
export { ChartWaterfallXIconFilled };
