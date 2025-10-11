import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HourglassFullIconFilled = memo(
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
          d="M17 1a3 3 0 0 1 3 3v1.116a7 7 0 0 1-2.627 5.466l-1.284 1.027a.5.5 0 0 0 0 .782l1.284 1.027A7 7 0 0 1 20 18.884V20a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.116a7 7 0 0 1 2.627-5.466l1.284-1.027a.5.5 0 0 0 0-.782l-1.284-1.027A7 7 0 0 1 4 5.116V4a3 3 0 0 1 3-3zM8.53 4.5a1 1 0 0 0-.988 1.153A3.5 3.5 0 0 0 8.813 7.85l1.285 1.027c.437.35.777.767 1.022 1.22a1 1 0 0 0 1.76 0c.245-.453.585-.87 1.022-1.22l1.285-1.027a3.5 3.5 0 0 0 1.271-2.197 1 1 0 0 0-.88-1.147L15.47 4.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HourglassFullIconFilled.displayName = "HourglassFullIconFilled";
export { HourglassFullIconFilled };
