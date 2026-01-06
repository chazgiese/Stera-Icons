import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GavelIconFillDuotone = memo(
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
          d="M10.797 5.81q.068.104.16.195l4.595 4.597q.091.09.194.158l-1.078 1.079 5.657 5.657a2 2 0 0 1-2.828 2.828l-5.657-5.657-1.08 1.08a1.3 1.3 0 0 0-.158-.196l-4.597-4.596a1.3 1.3 0 0 0-.193-.16z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M4.237 10.955a1.25 1.25 0 0 1 1.768 0l4.597 4.596a1.25 1.25 0 0 1 0 1.768l-1.06 1.061a1.25 1.25 0 0 1-1.77 0l-4.595-4.597a1.25 1.25 0 0 1 0-1.767zM12.017 3.177a1.25 1.25 0 0 1 1.767 0l4.597 4.596a1.25 1.25 0 0 1 0 1.768l-1.06 1.06a1.25 1.25 0 0 1-1.77 0l-4.595-4.596a1.25 1.25 0 0 1 0-1.768z"
        />
      </svg>
    ))
);
GavelIconFillDuotone.displayName = "GavelIconFillDuotone";
export { GavelIconFillDuotone };
