import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MinimizeIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M7.5 13.5a3 3 0 0 1 3 3V20a1.5 1.5 0 0 1-3 0v-3.5H4a1.5 1.5 0 0 1 0-3zM15 2.5A1.5 1.5 0 0 1 16.5 4v3.5H20a1.5 1.5 0 0 1 0 3h-3.5a3 3 0 0 1-3-3V4A1.5 1.5 0 0 1 15 2.5" />
        </g>
        <path
          fill="currentColor"
          d="M20 13.5a1.5 1.5 0 0 1 0 3h-3.5V20a1.5 1.5 0 0 1-3 0v-3.5a3 3 0 0 1 3-3zM9 2.5A1.5 1.5 0 0 1 10.5 4v3.5a3 3 0 0 1-3 3H4a1.5 1.5 0 1 1 0-3h3.5V4A1.5 1.5 0 0 1 9 2.5"
        />
      </svg>
    ))
);
MinimizeIconFillDuotone.displayName = "MinimizeIconFillDuotone";
export { MinimizeIconFillDuotone };
