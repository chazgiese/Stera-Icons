import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ReceiptIconFilltone = memo(
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
          d="M15.2 1c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052V22a1 1 0 0 1-1.555.832l-2.391-1.595-1.929 1.544a1 1 0 0 1-1.25 0L12 21.281l-1.875 1.5a1 1 0 0 1-1.25 0l-1.93-1.544-2.39 1.595A1 1 0 0 1 3 22V6.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C7.298.999 7.976 1 8.8 1z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15 14a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM15 10a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM15 6a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
ReceiptIconFilltone.displayName = "ReceiptIconFilltone";
export { ReceiptIconFilltone };
