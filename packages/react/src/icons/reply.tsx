import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ReplyIcon = memo(
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
          d="M10.47 3.47a.75.75 0 0 1 1.28.53v4.757c3.382.064 5.9.592 7.57 2.129 1.81 1.665 2.43 4.328 2.43 8.114a.75.75 0 0 1-1.434.307l-.002-.003-.011-.025-.06-.116a6 6 0 0 0-.273-.45 7.5 7.5 0 0 0-1.222-1.406C17.618 16.29 15.792 15.25 13 15.25h-1.25V20a.75.75 0 0 1-1.28.53l-8-8a.75.75 0 0 1 0-1.06zM4.06 12l6.19 6.19V14.5a.75.75 0 0 1 .75-.75h2c3.208 0 5.382 1.21 6.752 2.442q.204.184.383.367c-.235-2.24-.836-3.656-1.83-4.57-1.334-1.227-3.567-1.74-7.305-1.74a.75.75 0 0 1-.75-.75V5.81z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ReplyIcon.displayName = "ReplyIcon";
export { ReplyIcon };
