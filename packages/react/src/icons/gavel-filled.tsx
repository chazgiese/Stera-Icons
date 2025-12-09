import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GavelIconFilled = memo(
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
          d="m15.73 11.485-.708.708 5.304 5.302a2.001 2.001 0 0 1-2.83 2.83l-5.302-5.304-.708.706-5.657-5.657 4.244-4.243zM3.708 11.13a1.25 1.25 0 0 1 1.768 0l4.95 4.95a1.25 1.25 0 0 1 0 1.768l-.886.885a1.25 1.25 0 0 1-1.767 0l-4.95-4.95a1.25 1.25 0 0 1 0-1.767zM12.017 2.824a1.25 1.25 0 0 1 1.768 0l4.95 4.949a1.25 1.25 0 0 1 0 1.767l-.884.884a1.25 1.25 0 0 1-1.768 0l-4.95-4.95a1.25 1.25 0 0 1 0-1.768z"
        />
      </svg>
    ))
);
GavelIconFilled.displayName = "GavelIconFilled";
export { GavelIconFilled };
