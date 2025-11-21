import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ClipboardIconFilltone = memo(
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
          d="M17.75 3A3.25 3.25 0 0 1 21 6.25v13.5A3.25 3.25 0 0 1 17.75 23H6.25A3.25 3.25 0 0 1 3 19.75V6.25A3.25 3.25 0 0 1 6.25 3h.765Q7 3.123 7 3.25v1.5A2.25 2.25 0 0 0 9.25 7h5.5A2.25 2.25 0 0 0 17 4.75v-1.5q0-.127-.015-.25z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M14.75 1A2.25 2.25 0 0 1 17 3.25v1.5A2.25 2.25 0 0 1 14.75 7h-5.5A2.25 2.25 0 0 1 7 4.75v-1.5A2.25 2.25 0 0 1 9.25 1z"
        />
      </svg>
    ))
);
ClipboardIconFilltone.displayName = "ClipboardIconFilltone";
export { ClipboardIconFilltone };
