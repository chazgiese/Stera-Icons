import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GavelIconFilltone = memo(
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
          d="M10.425 16.08a1.25 1.25 0 0 1 0 1.768l-.885.885a1.25 1.25 0 0 1-1.768 0l-4.949-4.95a1.25 1.25 0 0 1 0-1.767l.885-.886a1.25 1.25 0 0 1 1.768 0zM18.734 7.772a1.25 1.25 0 0 1 0 1.768l-.883.884a1.25 1.25 0 0 1-1.768 0l-4.95-4.95a1.25 1.25 0 0 1 0-1.768l.884-.883a1.25 1.25 0 0 1 1.767 0z"
        />
        <path
          fill="currentColor"
          d="m15.73 11.484-.707.708 5.303 5.303a2.001 2.001 0 0 1-2.829 2.83l-5.303-5.304-.708.706-5.656-5.658 4.243-4.242z"
          opacity={0.4}
        />
      </svg>
    ))
);
GavelIconFilltone.displayName = "GavelIconFilltone";
export { GavelIconFilltone };
