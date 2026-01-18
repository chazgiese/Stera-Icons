import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleOffIconFillDuotone = memo(
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
          d="M1.293 1.293a1 1 0 0 1 1.414 0l19 19a1 1 0 0 1-1.414 1.414l-19-19a1 1 0 0 1 0-1.414"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M17.847 19.26A11.9 11.9 0 0 1 12 20.778c-1.148 0-2.258-.158-3.302-.453l-3.195 1.598c-1.528.764-3.25-.616-2.835-2.274l.555-2.216.027-.099.01-.034q0-.005.002-.009c-.008-.086-.071-.425-.536-1.08C1.638 14.68 1 12.854 1 10.889c0-2.335.888-4.449 2.356-6.118zM12 1c5.961 0 11 4.32 11 9.889 0 2.882-1.353 5.427-3.482 7.215L4.816 3.402C6.76 1.9 9.284 1 12 1" />
        </g>
      </svg>
    ))
);
ChatBubbleOffIconFillDuotone.displayName = "ChatBubbleOffIconFillDuotone";
export { ChatBubbleOffIconFillDuotone };
