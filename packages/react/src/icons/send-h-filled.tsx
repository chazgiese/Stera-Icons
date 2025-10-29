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
          d="M2.03 4.979C.976 3.045 3.041.904 5.012 1.889l16.199 8.1c1.658.829 1.658 3.196 0 4.025l-16.2 8.1c-1.97.984-4.034-1.157-2.98-3.09L5.314 13H14a1 1 0 0 0 0-2H5.315z"
        />
      </svg>
    ))
);
SendHIconFilled.displayName = "SendHIconFilled";
export { SendHIconFilled };
