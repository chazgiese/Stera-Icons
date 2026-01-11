import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleQuestionIconFillDuotone = memo(
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
          d="M12 1c5.961 0 11 4.32 11 9.889s-5.039 9.888-11 9.888c-1.148 0-2.258-.158-3.302-.453l-3.195 1.598c-1.528.764-3.25-.616-2.835-2.274l.555-2.216.027-.099.01-.034q0-.005.002-.009c-.008-.086-.071-.425-.536-1.08C1.638 14.68 1 12.854 1 10.889 1 5.319 6.039 1 12 1m0 12.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12 6c-1.264 0-2.637.722-2.97 2.034a1 1 0 0 0 1.94.492C11.007 8.378 11.33 8 12 8c.34 0 .617.111.79.249.17.136.21.267.21.35 0 .112-.1.377-.538.527C11.834 9.341 11 9.956 11 11a1 1 0 0 0 1.996.08q.01-.01.027-.02a.4.4 0 0 1 .087-.042C14.1 10.678 15 9.808 15 8.6 15 6.967 13.437 6 12 6"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 13.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6c1.437 0 3 .967 3 2.6 0 1.209-.9 2.079-1.89 2.418a.4.4 0 0 0-.087.042l-.027.02A1 1 0 0 1 11 11c0-1.044.835-1.66 1.462-1.874.438-.15.538-.415.538-.526 0-.084-.04-.215-.21-.351A1.27 1.27 0 0 0 12 8c-.67 0-.992.378-1.03.526a1 1 0 0 1-1.94-.492C9.365 6.722 10.737 6 12 6"
        />
      </svg>
    ))
);
ChatBubbleQuestionIconFillDuotone.displayName =
  "ChatBubbleQuestionIconFillDuotone";
export { ChatBubbleQuestionIconFillDuotone };
