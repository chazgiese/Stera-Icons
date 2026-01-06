import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarXYIconDuotone = memo(
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
          d="M2 3.25a.75.75 0 0 1 .75.75v14c0 .362 0 .589.015.76.013.16.034.206.04.217.048.094.124.17.218.218.011.006.057.027.217.04.171.014.398.015.76.015h18a.75.75 0 0 1 0 1.5H4c-.338 0-.636 0-.882-.02a2 2 0 0 1-.776-.198 2 2 0 0 1-.874-.874 2 2 0 0 1-.198-.776c-.02-.246-.02-.544-.02-.882V4A.75.75 0 0 1 2 3.25"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7 12.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75M11 5.25a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75M15 10.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75M19 7.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
ChartBarXYIconDuotone.displayName = "ChartBarXYIconDuotone";
export { ChartBarXYIconDuotone };
