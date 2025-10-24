import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendVIconFilled = memo(
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
          d="M9.987 2.79c.829-1.658 3.196-1.658 4.025 0l8.1 16.199c.984 1.97-1.156 4.036-3.09 2.981l-6.023-3.285v-8.684a1 1 0 0 0-2 0v8.683L4.977 21.97c-1.934 1.054-4.075-1.01-3.09-2.981z"
        />
        <path
          fill="currentColor"
          d="M9.987 2.79c.829-1.658 3.196-1.657 4.025 0l8.1 16.2c.984 1.97-1.156 4.035-3.09 2.98l-6.023-3.284V10a1 1 0 0 0-2 0v8.684L4.977 21.97c-1.934 1.054-4.075-1.011-3.09-2.982z"
        />
      </svg>
    ))
);
SendVIconFilled.displayName = "SendVIconFilled";
export { SendVIconFilled };
