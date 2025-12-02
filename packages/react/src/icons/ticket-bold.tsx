import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TicketIconBold = memo(
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
          d="M15 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20 4a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1 2 2 0 1 0 0 4 1 1 0 0 1 1 1v2a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1 2 2 0 1 0 0-4 1 1 0 0 1-1-1V7a3 3 0 0 1 3-3zM4 6a1 1 0 0 0-1 1v1.126a4.002 4.002 0 0 1 0 7.748V17a1 1 0 0 0 1 1h10v-2a1 1 0 1 1 2 0v2h4a1 1 0 0 0 1-1v-1.126a4.002 4.002 0 0 1 0-7.748V7a1 1 0 0 0-1-1h-4v2a1 1 0 1 1-2 0V6z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TicketIconBold.displayName = "TicketIconBold";
export { TicketIconBold };
