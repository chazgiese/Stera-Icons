import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleDotIconBold = memo(
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
          d="M12 1q.66 0 1.303.068a1 1 0 0 1-.211 1.99A10 10 0 0 0 12 3c-5.084 0-9 3.64-9 7.889 0 1.521.492 2.947 1.355 4.162.81 1.138.976 1.965.888 2.539-.016.108-.043.199-.057.248l-.01.035-.008.025-.004.014v.005l-.556 2.216 3.55-1.775.09-.039a1 1 0 0 1 .663-.018 10.1 10.1 0 0 0 3.089.476c5.084 0 9-3.639 9-7.888l-.001-.1a1 1 0 0 1 2-.03l.001.13c0 5.569-5.039 9.888-11 9.888-1.148 0-2.258-.158-3.302-.453l-3.195 1.598c-1.528.764-3.25-.616-2.835-2.274l.555-2.216.027-.099.01-.034q0-.005.002-.009c-.008-.086-.071-.425-.536-1.08C1.638 14.68 1 12.854 1 10.889 1 5.319 6.039 1 12 1"
        />
        <path fill="currentColor" d="M19 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
      </svg>
    ))
);
ChatBubbleDotIconBold.displayName = "ChatBubbleDotIconBold";
export { ChatBubbleDotIconBold };
