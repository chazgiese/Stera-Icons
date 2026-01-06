import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBoxDashedIconBoldDuotone = memo(
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
          <path d="M2 11.5a1 1 0 0 1 1 1V14a3 3 0 0 0 3 3 1 1 0 1 1 0 2 5 5 0 0 1-5-5v-1.5a1 1 0 0 1 1-1M22 11.5a1 1 0 0 1 1 1V14a5 5 0 0 1-5 5 1 1 0 1 1 0-2 3 3 0 0 0 3-3v-1.5a1 1 0 0 1 1-1M6 2a1 1 0 0 1 0 2 3 3 0 0 0-3 3v1.5a1 1 0 0 1-2 0V7a5 5 0 0 1 5-5M18 2a5 5 0 0 1 5 5v1.5a1 1 0 1 1-2 0V7a3 3 0 0 0-3-3 1 1 0 1 1 0-2M14.25 2a1 1 0 1 1 0 2h-4.5a1 1 0 0 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M14.445 17.168a1 1 0 0 1 1.11 1.664l-5.223 3.481C9.335 22.978 8 22.263 8 21.065V18a1 1 0 0 1 2 0v2.13z"
        />
      </svg>
    ))
);
ChatBoxDashedIconBoldDuotone.displayName = "ChatBoxDashedIconBoldDuotone";
export { ChatBoxDashedIconBoldDuotone };
