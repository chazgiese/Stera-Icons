import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatMessagesIconBold = memo(
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
          d="M12 3a5 5 0 0 1 5 5v1h1a5 5 0 0 1 5 5v6a1 1 0 0 1-1.447.895l-1.367-.684a2 2 0 0 0-.894-.211H12a5 5 0 0 1-5-5v-1H4.708c-.31 0-.617.072-.895.21l-1.366.684A1 1 0 0 1 1 14V8a5 5 0 0 1 5-5zm0 8a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h7.292c.591 0 1.174.132 1.708.384V14a3 3 0 0 0-3-3zM6 5a3 3 0 0 0-3 3v4.384A4 4 0 0 1 4.708 12h2.708q.144-.328.332-.63l.014-.023q.087-.139.181-.27.013-.017.026-.033a5 5 0 0 1 .416-.497l.023-.026.051-.05q.095-.095.194-.185l.026-.023q.385-.343.836-.602l.029-.017a5 5 0 0 1 .622-.297l.055-.02a5 5 0 0 1 1.008-.267q.018-.004.035-.006a5 5 0 0 1 .342-.038l.037-.002A5 5 0 0 1 12 9h3V8a3 3 0 0 0-3-3z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChatMessagesIconBold.displayName = "ChatMessagesIconBold";
export { ChatMessagesIconBold };
