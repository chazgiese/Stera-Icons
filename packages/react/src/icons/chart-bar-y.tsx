import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarY = memo(
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
          d="M15.75 3a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75M21.75 9a.75.75 0 0 1-.75.75H3l-.076-.004a.75.75 0 0 1 0-1.492L3 8.25h18a.75.75 0 0 1 .75.75M13.75 15a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75M17.75 21a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75"
        />
      </svg>
    ))
);
ChartBarY.displayName = "ChartBarY";
export { ChartBarY };
