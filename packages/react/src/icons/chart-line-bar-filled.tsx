import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartLineBarIconFilled = memo(
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
          d="M5 18a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-3 0v-.5A1.5 1.5 0 0 1 5 18M9 14a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-3 0v-4.5A1.5 1.5 0 0 1 9 14M13 15.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 1.5-1.5M17 13a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-3 0v-5.5A1.5 1.5 0 0 1 17 13M21 9a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-3 0v-9.5A1.5 1.5 0 0 1 21 9"
        />
        <path
          fill="currentColor"
          d="M20.911 2.969a1.5 1.5 0 1 1 2.178 2.062l-9.001 9.5a1.5 1.5 0 0 1-2.15.03l-2.44-2.44-6.438 6.44A1.5 1.5 0 0 1 .94 16.44l7.498-7.5.11-.1a1.5 1.5 0 0 1 2.012.1l2.41 2.409z"
        />
      </svg>
    ))
);
ChartLineBarIconFilled.displayName = "ChartLineBarIconFilled";
export { ChartLineBarIconFilled };
