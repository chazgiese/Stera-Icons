import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MinimizeIconLinetone = memo(
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
          <path d="M7.5 14a2.5 2.5 0 0 1 2.5 2.5V20a1 1 0 1 1-2 0v-3.5a.5.5 0 0 0-.5-.5H4a1 1 0 1 1 0-2zM15 3a1 1 0 0 1 1 1v3.5a.5.5 0 0 0 .5.5H20a1 1 0 1 1 0 2h-3.5A2.5 2.5 0 0 1 14 7.5V4a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          d="M20 14a1 1 0 1 1 0 2h-3.5a.5.5 0 0 0-.5.5V20a1 1 0 1 1-2 0v-3.5a2.5 2.5 0 0 1 2.5-2.5zM9 3a1 1 0 0 1 1 1v3.5A2.5 2.5 0 0 1 7.5 10H4a1 1 0 0 1 0-2h3.5a.5.5 0 0 0 .5-.5V4a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
MinimizeIconLinetone.displayName = "MinimizeIconLinetone";
export { MinimizeIconLinetone };
