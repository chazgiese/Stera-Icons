import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleOffIconFill = memo(
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
          d="M16.41 19.944a12 12 0 0 1-4.41.833c-1.148 0-2.258-.158-3.302-.453l-3.195 1.598c-1.528.764-3.25-.616-2.835-2.274l.555-2.216.027-.099.01-.034q0-.005.002-.009c-.008-.086-.071-.425-.536-1.08C1.638 14.68 1 12.854 1 10.889c0-1.802.53-3.472 1.445-4.909zM1.293 1.293a1 1 0 0 1 1.414 0l19 19a1 1 0 1 1-1.414 1.414l-19-19a1 1 0 0 1 0-1.414M12 1c5.961 0 11 4.32 11 9.889 0 2.36-.907 4.494-2.404 6.172L6.088 2.553A11.9 11.9 0 0 1 12 1"
        />
      </svg>
    ))
);
ChatBubbleOffIconFill.displayName = "ChatBubbleOffIconFill";
export { ChatBubbleOffIconFill };
