import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleDotIconFilled = memo(
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
          d="M12 1c.995 0 1.963.122 2.887.349a5.5 5.5 0 0 0 7.907 7.63c.133.616.206 1.254.206 1.91 0 5.569-5.039 9.888-11 9.888-1.148 0-2.258-.158-3.302-.453l-3.195 1.598c-1.528.764-3.25-.616-2.835-2.274l.555-2.216.027-.099.01-.034q0-.005.002-.009c-.008-.086-.071-.425-.536-1.08C1.638 14.68 1 12.854 1 10.889 1 5.319 6.039 1 12 1"
        />
        <path fill="currentColor" d="M19 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
      </svg>
    ))
);
ChatBubbleDotIconFilled.displayName = "ChatBubbleDotIconFilled";
export { ChatBubbleDotIconFilled };
