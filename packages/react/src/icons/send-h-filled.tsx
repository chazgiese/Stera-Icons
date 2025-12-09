import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendHIconFilled = memo(
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
          d="M2.03 4.98C.976 3.044 3.041.904 5.012 1.89L21.21 9.988c1.658.83 1.658 3.196 0 4.025l-16.2 8.1c-1.97.984-4.034-1.156-2.98-3.09l3.284-6.023H14a1 1 0 0 0 0-2H5.315z"
        />
      </svg>
    ))
);
SendHIconFilled.displayName = "SendHIconFilled";
export { SendHIconFilled };
