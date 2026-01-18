import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleCheckIconFillDuotone = memo(
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
          d="M12 1c5.961 0 11 4.32 11 9.889s-5.039 9.888-11 9.888c-1.148 0-2.258-.158-3.302-.453l-3.195 1.598c-1.528.764-3.25-.616-2.835-2.274l.555-2.216.027-.099.01-.034q0-.005.002-.009c-.008-.086-.071-.425-.536-1.08C1.638 14.68 1 12.854 1 10.889 1 5.319 6.039 1 12 1m4.582 6.793a1 1 0 0 0-1.414 0l-4.686 4.684L8.925 10.4a1 1 0 0 0-1.6 1.2l1.696 2.262c.085.113.187.25.285.36.104.117.272.281.52.39.317.14.672.164 1.005.072.262-.073.451-.213.571-.314.113-.095.232-.215.332-.315l4.848-4.848a1 1 0 0 0 0-1.414"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.168 7.793a1 1 0 1 1 1.414 1.414l-4.847 4.848c-.1.1-.22.22-.332.315-.12.101-.31.24-.572.314a1.5 1.5 0 0 1-1.005-.072 1.5 1.5 0 0 1-.52-.39c-.098-.11-.2-.246-.284-.36L7.325 11.6a1 1 0 1 1 1.6-1.2l1.558 2.078z"
        />
      </svg>
    ))
);
ChatBubbleCheckIconFillDuotone.displayName = "ChatBubbleCheckIconFillDuotone";
export { ChatBubbleCheckIconFillDuotone };
