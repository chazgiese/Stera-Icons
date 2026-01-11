import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleIconDuotone = memo(
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
          d="M4.368 16.697a.75.75 0 0 1 .628.855c-.014.09-.036.169-.05.216l-.025.088-.555 2.216a.25.25 0 0 0 .355.285l3.55-1.775a.75.75 0 0 1 .67 1.342l-3.55 1.774c-1.337.669-2.842-.539-2.48-1.989l.554-2.217q.013-.052.024-.089l.01-.032.008-.025c.009-.031.008-.031.007-.02a.75.75 0 0 1 .854-.629"
        />
        <path
          fill="currentColor"
          d="M12 1.25c5.852 0 10.75 4.235 10.75 9.639S17.852 20.527 12 20.527c-1.16 0-2.277-.166-3.325-.471l.266-.132a.751.751 0 0 0-.106-1.386c.986.316 2.051.49 3.165.49 5.194 0 9.25-3.725 9.25-8.14 0-4.414-4.056-8.138-9.25-8.138s-9.25 3.724-9.25 8.139c0 1.577.51 3.053 1.401 4.307.742 1.044.9 1.78.853 2.269a.75.75 0 0 0-1.49-.14c0-.008.002-.01-.002.004l.002-.004c.002-.028.018-.41-.585-1.26-1.06-1.49-1.679-3.267-1.679-5.176C1.25 5.485 6.149 1.25 12 1.25"
          opacity={0.4}
        />
      </svg>
    ))
);
ChatBubbleIconDuotone.displayName = "ChatBubbleIconDuotone";
export { ChatBubbleIconDuotone };
