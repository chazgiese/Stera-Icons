import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TicketIcon = memo(
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
          d="M15 10.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20 4.25A2.75 2.75 0 0 1 22.75 7v2a.75.75 0 0 1-.75.75 2.25 2.25 0 0 0 0 4.5.75.75 0 0 1 .75.75v2A2.75 2.75 0 0 1 20 19.75H4A2.75 2.75 0 0 1 1.25 17v-2a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 0 0-4.5.75.75 0 0 1-.75-.75V7A2.75 2.75 0 0 1 4 4.25zM4 5.75c-.69 0-1.25.56-1.25 1.25v1.324a3.752 3.752 0 0 1 0 7.35V17c0 .69.56 1.25 1.25 1.25h10.25V16a.75.75 0 0 1 1.5 0v2.25H20c.69 0 1.25-.56 1.25-1.25v-1.325a3.751 3.751 0 0 1 0-7.35V7c0-.69-.56-1.25-1.25-1.25h-4.25V8a.75.75 0 0 1-1.5 0V5.75z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TicketIcon.displayName = "TicketIcon";
export { TicketIcon };
