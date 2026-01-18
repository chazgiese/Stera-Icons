import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartCandleAltIconFill = memo(
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
          d="M4 5a1 1 0 0 1 1 1v3.25c.966 0 1.75.784 1.75 1.75v6A1.75 1.75 0 0 1 5 18.75V20a1 1 0 1 1-2 0v-1.25A1.75 1.75 0 0 1 1.25 17v-6c0-.966.784-1.75 1.75-1.75V6a1 1 0 0 1 1-1M20 3a1 1 0 0 1 1 1v1.25c.966 0 1.75.784 1.75 1.75v9A1.75 1.75 0 0 1 21 17.75V19a1 1 0 1 1-2 0v-1.25A1.75 1.75 0 0 1 17.25 16V7c0-.966.784-1.75 1.75-1.75V4a1 1 0 0 1 1-1M12 5a1 1 0 0 1 1 1v1.25c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 13 14.75V18a1 1 0 1 1-2 0v-3.25A1.75 1.75 0 0 1 9.25 13V9c0-.966.784-1.75 1.75-1.75V6a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ChartCandleAltIconFill.displayName = "ChartCandleAltIconFill";
export { ChartCandleAltIconFill };
