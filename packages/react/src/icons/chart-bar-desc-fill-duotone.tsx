import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarDescIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M17.25 11c-.69 0-1.25.56-1.25 1.25V19h5v-6.75c0-.69-.56-1.25-1.25-1.25zM10.75 7c-.69 0-1.25.56-1.25 1.25V19h5V8.25c0-.69-.56-1.25-1.25-1.25zM4.25 3C3.56 3 3 3.56 3 4.25V19h5V4.25C8 3.56 7.44 3 6.75 3z" />
        </g>
        <path fill="currentColor" d="M2 19a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2z" />
      </svg>
    ))
);
ChartBarDescIconFillDuotone.displayName = "ChartBarDescIconFillDuotone";
export { ChartBarDescIconFillDuotone };
