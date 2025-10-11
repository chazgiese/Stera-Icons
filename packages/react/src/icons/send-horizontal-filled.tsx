import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendHorizontalIconFilled = memo(
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
          d="M1.65 4.278C.712 2.56 2.548.656 4.3 1.531L21.21 9.987c1.659.83 1.658 3.196 0 4.026L4.3 22.469c-1.751.875-3.587-1.028-2.65-2.747L5.317 13H13a1 1 0 0 0 0-2H5.317z"
        />
      </svg>
    ))
);
SendHorizontalIconFilled.displayName = "SendHorizontalIconFilled";
export { SendHorizontalIconFilled };
