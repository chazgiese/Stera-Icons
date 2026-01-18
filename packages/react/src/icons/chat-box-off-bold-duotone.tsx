import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBoxOffIconBoldDuotone = memo(
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
          <path d="M3.683 5.097a3 3 0 0 0-.356.54c-.134.264-.227.612-.276 1.217C3 7.471 3 8.264 3 9.4v2.2c0 1.136 0 1.929.05 2.546.05.605.143.953.277 1.216a3 3 0 0 0 1.31 1.31c.264.135.612.228 1.217.277C6.471 17 7.264 17 8.4 17H9a1 1 0 0 1 1 1v2.13l4.445-2.962.128-.072A1 1 0 0 1 15 17h.586l1.98 1.98c-.562.019-1.213.02-1.966.02h-.297l-4.971 3.314C9.335 22.978 8 22.264 8 21.065v-2.067c-.92 0-1.68-.004-2.309-.056-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C.999 13.59 1 12.703 1 11.599V9.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96a5 5 0 0 1 .719-1.053zM15.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V11.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-.774 1.115 1 1 0 1 1-1.472-1.354q.276-.3.464-.668c.134-.263.227-.611.276-1.216.05-.617.051-1.41.051-2.546V9.4c0-1.136 0-1.929-.05-2.546-.05-.605-.143-.953-.277-1.216a3 3 0 0 0-1.31-1.31c-.264-.135-.612-.228-1.218-.277C17.53 4 16.737 4 15.6 4H8.4c-.427 0-.809 0-1.155.003a1 1 0 0 1-.017-2Q7.762 1.999 8.4 2z" />
        </g>
        <path
          fill="currentColor"
          d="M1.293 1.293a1 1 0 0 1 1.414 0l19 19a1 1 0 0 1-1.414 1.414l-19-19a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ChatBoxOffIconBoldDuotone.displayName = "ChatBoxOffIconBoldDuotone";
export { ChatBoxOffIconBoldDuotone };
