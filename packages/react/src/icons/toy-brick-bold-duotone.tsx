import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToyBrickIconBoldDuotone = memo(
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
          d="M18 8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3zM6 10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6.75 6.5a.25.25 0 0 0-.25.25V8H6c-.547 0-1.058.149-1.5.404V6.75A2.25 2.25 0 0 1 6.75 4.5h2.5a2.25 2.25 0 0 1 2.25 2.25V8h-2V6.75a.25.25 0 0 0-.25-.25zM14.75 6.5a.25.25 0 0 0-.25.25V8h-2V6.75a2.25 2.25 0 0 1 2.25-2.25h2.5a2.25 2.25 0 0 1 2.25 2.25v1.654A3 3 0 0 0 18 8h-.5V6.75a.25.25 0 0 0-.25-.25z"
        />
      </svg>
    ))
);
ToyBrickIconBoldDuotone.displayName = "ToyBrickIconBoldDuotone";
export { ToyBrickIconBoldDuotone };
