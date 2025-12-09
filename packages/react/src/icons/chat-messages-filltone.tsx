import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatMessagesIconFilltone = memo(
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
          d="M18 9.25A4.75 4.75 0 0 1 22.75 14v6a.75.75 0 0 1-1.085.67l-1.367-.683a2.25 2.25 0 0 0-1.006-.237H12A4.75 4.75 0 0 1 7.25 15v-1A4.75 4.75 0 0 1 12 9.25z"
        />
        <path
          fill="currentColor"
          d="M12 3.25A4.75 4.75 0 0 1 16.75 8v1q0 .126-.006.25H12a4.75 4.75 0 0 0-4.744 4.5H4.708c-.35 0-.694.081-1.006.237l-1.367.684A.75.75 0 0 1 1.25 14V8A4.75 4.75 0 0 1 6 3.25z"
          opacity={0.4}
        />
      </svg>
    ))
);
ChatMessagesIconFilltone.displayName = "ChatMessagesIconFilltone";
export { ChatMessagesIconFilltone };
