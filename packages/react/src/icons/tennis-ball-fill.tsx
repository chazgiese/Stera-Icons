import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TennisBallIconFill = memo(
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
          d="M12 1c2.66 0 5.098.943 7 2.514-2.443 2.017-4 5.07-4 8.486s1.557 6.468 4 8.485A10.96 10.96 0 0 1 12 23c-2.66 0-5.098-.944-7-2.515 2.443-2.017 4-5.07 4-8.485 0-3.416-1.557-6.469-4-8.486A10.96 10.96 0 0 1 12 1"
        />
        <path
          fill="currentColor"
          d="M3.57 4.934A8.98 8.98 0 0 1 7 12a8.98 8.98 0 0 1-3.43 7.065A10.95 10.95 0 0 1 1 12c0-2.69.966-5.155 2.57-7.066M20.429 4.934A10.95 10.95 0 0 1 23 12c0 2.69-.967 5.154-2.571 7.065A8.98 8.98 0 0 1 17 12a8.98 8.98 0 0 1 3.429-7.066"
        />
      </svg>
    ))
);
TennisBallIconFill.displayName = "TennisBallIconFill";
export { TennisBallIconFill };
