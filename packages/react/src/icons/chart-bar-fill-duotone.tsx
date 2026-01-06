import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarIconFillDuotone = memo(
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
        <path fill="currentColor" d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
        <g fill="currentColor" opacity={0.4}>
          <path d="M6.75 3C7.44 3 8 3.56 8 4.25V19H3V4.25C3 3.56 3.56 3 4.25 3zM13.25 11c.69 0 1.25.56 1.25 1.25V19h-5v-6.75c0-.69.56-1.25 1.25-1.25zM19.75 7c.69 0 1.25.56 1.25 1.25V19h-5V8.25c0-.69.56-1.25 1.25-1.25z" />
        </g>
      </svg>
    ))
);
ChartBarIconFillDuotone.displayName = "ChartBarIconFillDuotone";
export { ChartBarIconFillDuotone };
