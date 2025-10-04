import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBar = memo(
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
          d="M3 8.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 3 8.25M9 2.25a.75.75 0 0 1 .75.75v18l-.004.076a.75.75 0 0 1-1.492 0L8.25 21V3A.75.75 0 0 1 9 2.25M15 10.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V11a.75.75 0 0 1 .75-.75M21 6.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
ChartBar.displayName = "ChartBar";
export { ChartBar };
