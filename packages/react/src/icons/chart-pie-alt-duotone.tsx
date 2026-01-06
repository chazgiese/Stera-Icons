import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartPieAltIconDuotone = memo(
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
          d="M13.073 1.303a10.76 10.76 0 0 1 8.862 6.582c.526 1.268.815 2.66.815 4.115 0 2.581-.91 4.952-2.428 6.805-.662.81-1.82.757-2.488.09L11.47 12.53a.75.75 0 0 1-.22-.53V3c0-.945.783-1.801 1.823-1.698m.251 10.961 5.57 5.57c.051.05.112.07.163.07a.13.13 0 0 0 .104-.05A9.2 9.2 0 0 0 21.25 12a9.2 9.2 0 0 0-.445-2.836zm-.4-9.468a.13.13 0 0 0-.109.04.23.23 0 0 0-.065.164v7.877l7.481-3.098a9.25 9.25 0 0 0-7.306-4.983"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M7.7 2.144a.75.75 0 0 1 .6 1.375A9.25 9.25 0 0 0 2.75 12a9.25 9.25 0 0 0 12.627 8.615.75.75 0 0 1 .548 1.397c-1.217.477-2.541.739-3.925.739-5.937 0-10.75-4.813-10.75-10.75 0-4.41 2.655-8.197 6.45-9.856"
          opacity={0.4}
        />
      </svg>
    ))
);
ChartPieAltIconDuotone.displayName = "ChartPieAltIconDuotone";
export { ChartPieAltIconDuotone };
