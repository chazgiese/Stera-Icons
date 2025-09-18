import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Heart = memo(
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
          d="M16.762 2.25c3.32 0 5.988 2.74 5.988 6.089 0 2.559-1.35 4.543-1.855 5.263-2.458 3.507-5.884 5.91-8.421 7.98a.75.75 0 0 1-.948 0c-2.537-2.07-5.963-4.473-8.42-7.98-.506-.72-1.856-2.704-1.856-5.263 0-3.35 2.668-6.089 5.988-6.089 1.948 0 3.671.946 4.762 2.401 1.091-1.455 2.813-2.4 4.762-2.401m0 1.5c-1.802 0-3.365 1.088-4.078 2.673a.75.75 0 0 1-1.368 0C10.603 4.838 9.04 3.75 7.238 3.75c-2.465 0-4.488 2.04-4.488 4.589 0 2.059 1.099 3.71 1.584 4.402C6.502 15.835 9.451 17.996 12 20.04c2.55-2.045 5.497-4.204 7.666-7.299.485-.692 1.584-2.343 1.584-4.402 0-2.548-2.023-4.589-4.488-4.589"
        />
      </svg>
    ))
);
Heart.displayName = "Heart";
export { Heart };
