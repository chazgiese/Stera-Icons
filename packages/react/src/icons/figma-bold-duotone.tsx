import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FigmaIconBoldDuotone = memo(
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
          d="M15.335 1a4.334 4.334 0 0 1 2.768 7.666A4.333 4.333 0 1 0 13 15.65v3.016a4.334 4.334 0 1 1-7.102-3.333A4.33 4.33 0 0 1 4.334 12c0-1.34.608-2.54 1.564-3.334A4.333 4.333 0 0 1 8.667 1zm-6.68 15.333A2.334 2.334 0 1 0 11 18.666v-2.332H8.667zm.012-6.666a2.333 2.333 0 0 0-.013 4.666h2.347V9.667zm0-6.667a2.333 2.333 0 0 0 0 4.667h2.334V3zm4.335 4.667h2.333a2.334 2.334 0 0 0 0-4.667h-2.333z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.335 7.667a4.334 4.334 0 1 1 0 8.668 4.334 4.334 0 0 1 0-8.668m0 2a2.333 2.333 0 1 0 0 4.667 2.333 2.333 0 0 0 0-4.667"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FigmaIconBoldDuotone.displayName = "FigmaIconBoldDuotone";
export { FigmaIconBoldDuotone };
