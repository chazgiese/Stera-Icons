import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatMessagesIconFilled = memo(
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
          d="M12 3a5 5 0 0 1 5 5v1q0 .126-.007.25H18A4.75 4.75 0 0 1 22.75 14v6a.75.75 0 0 1-1.085.67l-1.367-.683a2.25 2.25 0 0 0-1.006-.237H12A4.75 4.75 0 0 1 7.25 15v-1H4.708a2 2 0 0 0-.895.21l-1.366.684A1 1 0 0 1 1 14V8a5 5 0 0 1 4.743-4.993L6 3zM6 5l-.154.004A3 3 0 0 0 3 8v4.384A4 4 0 0 1 4.708 12h2.983A4.75 4.75 0 0 1 12 9.25h2.988Q15 9.127 15 9V8a3 3 0 0 0-3-3z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChatMessagesIconFilled.displayName = "ChatMessagesIconFilled";
export { ChatMessagesIconFilled };
