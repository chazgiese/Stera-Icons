import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleDashedIcon = memo(
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
          d="M3.495 17.374a.75.75 0 0 1 1.455.363l-.584 2.335a.25.25 0 0 0 .354.284l3.55-1.774a.75.75 0 0 1 .671 1.342l-3.55 1.774c-1.337.668-2.843-.539-2.48-1.989zM13.726 18.887a.75.75 0 1 1 .245 1.48q-.96.159-1.97.16a.75.75 0 0 1 0-1.5q.886-.001 1.725-.14M19.572 15.564a.751.751 0 0 1 1.172.936 10.4 10.4 0 0 1-3.04 2.561.75.75 0 0 1-.736-1.307 8.9 8.9 0 0 0 2.604-2.19M2.016 11.847a.75.75 0 0 1 .892.574 7.4 7.4 0 0 0 .75 1.987.75.75 0 0 1-1.316.72 8.9 8.9 0 0 1-.9-2.39.75.75 0 0 1 .574-.891M21.613 8.32a.75.75 0 0 1 .902.556 8.7 8.7 0 0 1 0 4.025.75.75 0 1 1-1.459-.345 7.2 7.2 0 0 0 0-3.334.75.75 0 0 1 .557-.903M5.027 3.735a.75.75 0 0 1 .936 1.172C4.8 5.835 3.883 7 3.333 8.283a.75.75 0 0 1-1.38-.59c.658-1.534 1.738-2.891 3.074-3.958M16.682 3.002a.75.75 0 0 1 1.022-.286 10.4 10.4 0 0 1 3.04 2.562.75.75 0 0 1-1.172.937 8.9 8.9 0 0 0-2.604-2.192.75.75 0 0 1-.286-1.021M12 1.25q1.011.002 1.971.162a.75.75 0 1 1-.245 1.48 10.5 10.5 0 0 0-1.725-.142c-.728 0-1.45.089-2.15.256a.75.75 0 0 1-.35-1.46c.81-.192 1.65-.296 2.5-.296"
        />
      </svg>
    ))
);
ChatBubbleDashedIcon.displayName = "ChatBubbleDashedIcon";
export { ChatBubbleDashedIcon };
