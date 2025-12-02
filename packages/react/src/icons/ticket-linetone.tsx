import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TicketIconLinetone = memo(
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
          <path d="M15 15a1 1 0 0 1 1 1v2h-2v-2a1 1 0 0 1 1-1M15 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M16 6v2a1 1 0 1 1-2 0V6z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20 4a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1 2 2 0 1 0 0 4 1 1 0 0 1 1 1v2a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1 2 2 0 1 0 0-4 1 1 0 0 1-1-1V7a3 3 0 0 1 3-3zM4 6a1 1 0 0 0-1 1v1.126a4.002 4.002 0 0 1 0 7.748V17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1.126a4.002 4.002 0 0 1 0-7.748V7a1 1 0 0 0-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TicketIconLinetone.displayName = "TicketIconLinetone";
export { TicketIconLinetone };
