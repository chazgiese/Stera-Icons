import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartAreaIconDuotone = memo(
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
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m1.5 19 8-8 3.5 3.5L22.5 5"
        />
        <path
          fill="currentColor"
          d="M23.237 4.867A1 1 0 0 1 23.25 5v12.75a2 2 0 0 1-2 2H1.5a.748.748 0 0 0 .53-.22l1.28-1.28h17.94a.5.5 0 0 0 .5-.5V6.81l1.28-1.28c.18-.18.25-.43.207-.663"
          opacity={0.4}
        />
      </svg>
    ))
);
ChartAreaIconDuotone.displayName = "ChartAreaIconDuotone";
export { ChartAreaIconDuotone };
