import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChatBubbleOffIcon = memo(
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
          d="M1.47 1.47a.75.75 0 0 1 1.06 0l19 19a.75.75 0 1 1-1.06 1.06l-2.58-2.579c-1.695.998-3.72 1.576-5.89 1.576-1.16 0-2.277-.166-3.325-.471l-3.283 1.642c-1.338.669-2.843-.539-2.48-1.989l.553-2.217q.013-.052.024-.089l.01-.032.008-.025.006-.02c.002-.03.02-.411-.584-1.26-1.06-1.49-1.679-3.268-1.679-5.177 0-2.339.929-4.47 2.451-6.127L1.47 2.53a.75.75 0 0 1 0-1.06m3.293 4.353C3.496 7.223 2.75 8.984 2.75 10.89c0 1.577.51 3.053 1.401 4.307.787 1.107.92 1.869.845 2.356-.014.09-.036.169-.05.216l-.026.088-.554 2.216a.25.25 0 0 0 .355.284l3.55-1.774.135-.053a.75.75 0 0 1 .429.01c.986.315 2.051.488 3.165.488 1.758 0 3.396-.432 4.79-1.176z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M12 1.25c5.852 0 10.75 4.235 10.75 9.639 0 2.07-.728 3.982-1.954 5.544a.75.75 0 1 1-1.18-.926c1.035-1.319 1.634-2.91 1.634-4.618 0-4.415-4.056-8.139-9.25-8.139a10.2 10.2 0 0 0-4.392.975.75.75 0 1 1-.644-1.355A11.7 11.7 0 0 1 12 1.25"
        />
      </svg>
    ))
);
ChatBubbleOffIcon.displayName = "ChatBubbleOffIcon";
export { ChatBubbleOffIcon };
