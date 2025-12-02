import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TicketIconFilled = memo(
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
          fillRule="evenodd"
          d="M14 7a1 1 0 1 0 2 0V4.5h4A2.5 2.5 0 0 1 22.5 7v2a.5.5 0 0 1-.5.5 2.5 2.5 0 0 0 0 5 .5.5 0 0 1 .5.5v2a2.5 2.5 0 0 1-2.5 2.5h-4V17a1 1 0 1 0-2 0v2.5H4A2.5 2.5 0 0 1 1.5 17v-2a.5.5 0 0 1 .5-.5 2.5 2.5 0 0 0 0-5 .5.5 0 0 1-.5-.5V7A2.5 2.5 0 0 1 4 4.5h10zm1 3a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TicketIconFilled.displayName = "TicketIconFilled";
export { TicketIconFilled };
