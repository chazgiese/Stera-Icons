import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendHIconFilltone = memo(
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
          d="M2.03 4.978C.976 3.044 3.041.903 5.012 1.888l16.199 8.1c1.658.829 1.658 3.196 0 4.025l-16.2 8.1c-1.97.984-4.035-1.156-2.98-3.09l3.83-7.024z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M14 11a1 1 0 1 1 0 2H5.315l.546-1-.546-1z"
        />
      </svg>
    ))
);
SendHIconFilltone.displayName = "SendHIconFilltone";
export { SendHIconFilltone };
