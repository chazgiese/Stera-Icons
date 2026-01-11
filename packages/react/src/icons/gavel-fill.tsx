import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GavelIconFill = memo(
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
          d="m15.73 11.485-.708.708 5.304 5.302a2.001 2.001 0 0 1-2.83 2.83l-5.302-5.304-.708.706-5.657-5.658 4.244-4.242zM3.708 11.13a1.25 1.25 0 0 1 1.768 0l4.95 4.95a1.25 1.25 0 0 1 0 1.768l-.886.885a1.25 1.25 0 0 1-1.767 0l-4.95-4.95a1.25 1.25 0 0 1 0-1.767zM12.017 2.823a1.25 1.25 0 0 1 1.768 0l4.95 4.95a1.25 1.25 0 0 1 0 1.767l-.884.884a1.25 1.25 0 0 1-1.768 0l-4.95-4.95a1.25 1.25 0 0 1 0-1.768z"
        />
      </svg>
    ))
);
GavelIconFill.displayName = "GavelIconFill";
export { GavelIconFill };
