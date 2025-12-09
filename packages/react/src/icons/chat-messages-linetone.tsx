import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatMessagesIconLinetone = memo(
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
          d="M12 3a5 5 0 0 1 5 5v1h-2V8a3 3 0 0 0-3-3H6l-.154.004A3 3 0 0 0 3 8v4.384A4 4 0 0 1 4.708 12h2.709A5 5 0 0 0 7 14H4.708a2 2 0 0 0-.895.21l-1.366.684A1 1 0 0 1 1 14V8a5 5 0 0 1 4.743-4.993L6 3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.257 9.007A5 5 0 0 1 23 14v6a1 1 0 0 1-1.447.895l-1.367-.684a2 2 0 0 0-.894-.211H12a5 5 0 0 1-5-5v-1a5 5 0 0 1 5-5h6zM12 11a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h7.292c.591 0 1.174.132 1.708.384V14a3 3 0 0 0-2.846-2.996L18 11z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChatMessagesIconLinetone.displayName = "ChatMessagesIconLinetone";
export { ChatMessagesIconLinetone };
