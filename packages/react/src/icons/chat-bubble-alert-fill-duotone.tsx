import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleAlertIconFillDuotone = memo(
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
          d="M12 1c5.961 0 11 4.32 11 9.889s-5.039 9.888-11 9.888c-1.148 0-2.258-.158-3.302-.453l-3.195 1.598c-1.528.764-3.25-.616-2.835-2.274l.555-2.216.027-.099.01-.034q0-.005.002-.009c-.008-.086-.071-.425-.536-1.08C1.638 14.68 1 12.854 1 10.889 1 5.319 6.039 1 12 1m0 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m0-6.25a1 1 0 0 0-1 1v3l.005.102a1 1 0 0 0 1.99 0L13 10.5v-3a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.5a1 1 0 0 1 1 1v3l-.005.102a1 1 0 0 1-1.99 0L11 10.5v-3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ChatBubbleAlertIconFillDuotone.displayName = "ChatBubbleAlertIconFillDuotone";
export { ChatBubbleAlertIconFillDuotone };
