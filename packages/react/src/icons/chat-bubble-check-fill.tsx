import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleCheckIconFill = memo(
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
          d="M12 1c5.961 0 11 4.32 11 9.889s-5.039 9.888-11 9.888c-1.148 0-2.258-.158-3.302-.453l-3.195 1.598c-1.528.764-3.25-.616-2.835-2.274l.555-2.216.027-.099.01-.034q0-.005.002-.009c-.008-.086-.071-.425-.536-1.08C1.638 14.68 1 12.854 1 10.889 1 5.319 6.039 1 12 1m4.582 6.793a1 1 0 0 0-1.414 0l-4.686 4.684L8.925 10.4a1 1 0 1 0-1.6 1.2l1.696 2.262c.085.113.187.25.285.36.104.117.271.281.52.39a1.5 1.5 0 0 0 1.005.072c.262-.073.451-.213.571-.314.113-.095.232-.215.332-.315l4.848-4.848a1 1 0 0 0 0-1.414"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChatBubbleCheckIconFill.displayName = "ChatBubbleCheckIconFill";
export { ChatBubbleCheckIconFill };
