import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineBarChartIconBold = memo(
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
          d="M5 17.5a1 1 0 0 1 1 1V20l-.005.103a1 1 0 0 1-1.99 0L4 20v-1.5a1 1 0 0 1 1-1M9 13.5a1 1 0 0 1 1 1V20a1 1 0 0 1-2 0v-5.5a1 1 0 0 1 1-1M13 15.251a1 1 0 0 1 1 1v3.75a1 1 0 0 1-2 0v-3.75a1 1 0 0 1 1-1M17 12.5a1 1 0 0 1 1 1V20a1 1 0 0 1-2 0v-6.5a1 1 0 0 1 1-1M21 8.25a1 1 0 0 1 1 1V20a1 1 0 0 1-2 0V9.25a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          d="M21.274 3.313a1 1 0 0 1 1.452 1.375l-9 9.5a1 1 0 0 1-1.434.02L9.5 11.415l-6.792 6.793a1 1 0 0 1-1.414-1.415l7.5-7.5.072-.066a1 1 0 0 1 1.342.066l2.773 2.773z"
        />
      </svg>
    ))
);
LineBarChartIconBold.displayName = "LineBarChartIconBold";
export { LineBarChartIconBold };
