import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleIconLinetone = memo(
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
          d="M12 1c5.961 0 11 4.32 11 9.889s-5.039 9.888-11 9.888c-1.148 0-2.257-.158-3.3-.453l.354-.177a1 1 0 0 0-.144-1.846c.961.308 2.002.476 3.09.476 5.084 0 9-3.639 9-7.888S17.084 3 12 3s-9 3.64-9 7.889c0 1.521.492 2.947 1.355 4.162.549.77.801 1.396.88 1.902.04.255.035.476.004.66a1.5 1.5 0 0 1-.06.242l.013-.057a1 1 0 0 0-1.854-.71l-.003.007-.005.008-.008.016-.013.03-.01.022a1 1 0 0 0-.038.112l-.002-.02c-.018-.114-.106-.452-.533-1.053C1.638 14.68 1 12.854 1 10.889 1 5.319 6.039 1 12 1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M3.252 17.314a1 1 0 0 1 1.94.484l-.584 2.336 3.551-1.775a1 1 0 0 1 .895 1.789l-3.551 1.774c-1.528.764-3.248-.616-2.834-2.273z"
        />
      </svg>
    ))
);
ChatBubbleIconLinetone.displayName = "ChatBubbleIconLinetone";
export { ChatBubbleIconLinetone };
