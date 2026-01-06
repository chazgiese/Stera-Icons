import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarAscIconDuotone = memo(
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
          d="M16.25 4.75a.5.5 0 0 0-.5.5v14h-1.5v-10a.5.5 0 0 0-.5-.5h-3.5a.5.5 0 0 0-.5.5v10h-1.5v-6a.5.5 0 0 0-.5-.5h-3.5a.5.5 0 0 0-.5.5v6h-1.5v-6a2 2 0 0 1 2-2h3.5q.26.002.5.065V9.25a2 2 0 0 1 2-2h3.5a2 2 0 0 1 .5.065V5.25a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v14h-1.5v-14a.5.5 0 0 0-.5-.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M22 19.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ChartBarAscIconDuotone.displayName = "ChartBarAscIconDuotone";
export { ChartBarAscIconDuotone };
