import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MinimizeIconDuotone = memo(
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
          <path d="M7.5 14.25a2.25 2.25 0 0 1 2.25 2.25V20a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 0-.75-.75H4a.75.75 0 0 1 0-1.5zM15 3.25a.75.75 0 0 1 .75.75v3.5c0 .414.336.75.75.75H20a.75.75 0 0 1 0 1.5h-3.5a2.25 2.25 0 0 1-2.25-2.25V4a.75.75 0 0 1 .75-.75" />
        </g>
        <path
          fill="currentColor"
          d="M20 14.25a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 0-.75.75V20a.75.75 0 0 1-1.5 0v-3.5a2.25 2.25 0 0 1 2.25-2.25zM9 3.25a.75.75 0 0 1 .75.75v3.5A2.25 2.25 0 0 1 7.5 9.75H4a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 0 .75-.75V4A.75.75 0 0 1 9 3.25"
        />
      </svg>
    ))
);
MinimizeIconDuotone.displayName = "MinimizeIconDuotone";
export { MinimizeIconDuotone };
