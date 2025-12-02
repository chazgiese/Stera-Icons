import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBoxDashedIconFilled = memo(
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
          d="M14.445 17.168a1 1 0 1 1 1.11 1.664l-5.223 3.482C9.335 22.978 8 22.264 8 21.065V18a1 1 0 1 1 2 0v2.13zM2 11.5a1 1 0 0 1 1 1V14a3 3 0 0 0 3 3 1 1 0 1 1 0 2 5 5 0 0 1-5-5v-1.5a1 1 0 0 1 1-1M22 11.5a1 1 0 0 1 1 1V14a5 5 0 0 1-5 5 1 1 0 1 1 0-2 3 3 0 0 0 3-3v-1.5a1 1 0 0 1 1-1M15.4 6c1.26 0 1.89 0 2.371.245.424.216.768.56.984.984.245.48.245 1.11.245 2.37V11.4c0 1.26 0 1.89-.245 2.371-.216.424-.56.768-.983.984C17.29 15 16.66 15 15.4 15H8.6c-1.26 0-1.89 0-2.371-.245a2.25 2.25 0 0 1-.984-.984C5 13.292 5 12.662 5 11.401V9.6c0-1.26 0-1.89.245-2.371a2.25 2.25 0 0 1 .984-.984C6.709 6 7.339 6 8.599 6zM6 2a1 1 0 0 1 0 2 3 3 0 0 0-3 3v1.5a1 1 0 0 1-2 0V7a5 5 0 0 1 5-5M18 2a5 5 0 0 1 5 5v1.5a1 1 0 1 1-2 0V7a3 3 0 0 0-3-3 1 1 0 1 1 0-2M14.25 2a1 1 0 1 1 0 2h-4.5a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ChatBoxDashedIconFilled.displayName = "ChatBoxDashedIconFilled";
export { ChatBoxDashedIconFilled };
