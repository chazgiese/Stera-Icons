import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBoxTextIconBoldDuotone = memo(
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
          d="M15.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V11.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-2.185 2.186c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058h-.296l-4.971 3.314C9.335 22.978 8 22.264 8 21.065v-2.067c-.92 0-1.68-.004-2.309-.056-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C.999 13.59 1 12.703 1 11.599V9.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 3.73 2.544c.593-.302 1.233-.428 1.961-.487C6.41 1.999 7.297 2 8.401 2zM8.4 4c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277a3 3 0 0 0-1.31 1.31c-.135.264-.228.612-.277 1.217C3 7.471 3 8.264 3 9.4v2.2c0 1.136 0 1.929.05 2.546.05.605.143.953.277 1.216a3 3 0 0 0 1.31 1.31c.264.135.612.228 1.217.277C6.471 17 7.264 17 8.4 17H9a1 1 0 0 1 1 1v2.13l4.445-2.962A1 1 0 0 1 15 17h.6c1.136 0 1.929 0 2.545-.05.606-.05.954-.143 1.217-.277a3 3 0 0 0 1.31-1.31c.135-.264.228-.612.277-1.217.05-.617.051-1.41.051-2.546V9.4c0-1.136 0-1.929-.05-2.546-.05-.605-.143-.953-.277-1.216a3 3 0 0 0-1.31-1.31c-.264-.135-.612-.228-1.218-.277C17.53 4 16.737 4 15.6 4z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 11.5a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 7.5a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
ChatBoxTextIconBoldDuotone.displayName = "ChatBoxTextIconBoldDuotone";
export { ChatBoxTextIconBoldDuotone };
