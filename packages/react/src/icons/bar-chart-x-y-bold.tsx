import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BarChartXYIconBold = memo(
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
          d="M2 3a1 1 0 0 1 1 1v14c0 .366 0 .581.014.74a1 1 0 0 0 .017.128.25.25 0 0 0 .1.1 1 1 0 0 0 .13.018C3.419 19 3.634 19 4 19h18a1 1 0 1 1 0 2H4c-.333 0-.644 0-.902-.02a2.3 2.3 0 0 1-.87-.225 2.25 2.25 0 0 1-.983-.983 2.3 2.3 0 0 1-.224-.87C.999 18.644 1 18.333 1 18V4a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          d="M7 12a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M11 5a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1M15 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M19 7a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
BarChartXYIconBold.displayName = "BarChartXYIconBold";
export { BarChartXYIconBold };
