import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartLineDescIconBoldDuotone = memo(
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
          d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M2.4 3.2a1 1 0 0 1 1.4.2l5.499 7.333 5.254-2.627a1 1 0 0 1 1.228.27l6 7.5a1.001 1.001 0 0 1-1.562 1.25l-5.494-6.87-5.278 2.639A1 1 0 0 1 8.2 12.6l-6-8a1 1 0 0 1 .2-1.4"
        />
      </svg>
    ))
);
ChartLineDescIconBoldDuotone.displayName = "ChartLineDescIconBoldDuotone";
export { ChartLineDescIconBoldDuotone };
