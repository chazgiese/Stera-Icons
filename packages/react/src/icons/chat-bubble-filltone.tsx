import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleIconFilltone = memo(
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
          d="M3.374 17.03c1.361 1.538 3.217 2.695 5.331 3.292l-3.202 1.6c-1.528.765-3.248-.615-2.834-2.273l.583-2.335a1 1 0 0 1 .122-.285"
        />
        <path
          fill="currentColor"
          d="M12 1c5.961 0 11 4.32 11 9.889s-5.039 9.888-11 9.888c-3.782 0-7.192-1.738-9.18-4.431l-.094-.136C1.638 14.68 1 12.854 1 10.889 1 5.319 6.039 1 12 1"
          opacity={0.32}
        />
      </svg>
    ))
);
ChatBubbleIconFilltone.displayName = "ChatBubbleIconFilltone";
export { ChatBubbleIconFilltone };
