import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleQuestionIconBold = memo(
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
          d="M12 13.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6c1.437 0 3 .967 3 2.6 0 1.209-.9 2.079-1.89 2.418a.4.4 0 0 0-.087.042q-.017.01-.027.02A1 1 0 0 1 11 11c0-1.044.834-1.66 1.462-1.874.438-.15.538-.415.538-.526 0-.084-.04-.215-.21-.351A1.27 1.27 0 0 0 12 8c-.67 0-.993.378-1.03.526a1 1 0 0 1-1.94-.492C9.363 6.722 10.735 6 12 6"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c5.961 0 11 4.32 11 9.889s-5.039 9.888-11 9.888c-1.148 0-2.258-.158-3.302-.453l-3.195 1.598c-1.528.764-3.25-.616-2.835-2.274l.555-2.216.027-.099.01-.034q0-.005.002-.009c-.008-.086-.071-.425-.536-1.08C1.638 14.68 1 12.854 1 10.889 1 5.319 6.039 1 12 1m0 2c-5.084 0-9 3.64-9 7.889 0 1.521.492 2.947 1.355 4.162.81 1.138.976 1.965.888 2.539-.016.108-.043.199-.057.248l-.01.035-.008.025-.004.014v.005l-.556 2.216 3.55-1.775.09-.039a1 1 0 0 1 .663-.018 10.1 10.1 0 0 0 3.089.476c5.084 0 9-3.639 9-7.888S17.084 3 12 3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChatBubbleQuestionIconBold.displayName = "ChatBubbleQuestionIconBold";
export { ChatBubbleQuestionIconBold };
