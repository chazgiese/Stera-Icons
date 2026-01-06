import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineLeftIconFillDuotone = memo(
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
          d="M12.701 5.238c.756-.756 2.048-.22 2.05.847V11H21a1 1 0 0 1 0 2h-6.25v4.915c-.001 1.068-1.294 1.603-2.05.847l-5.856-5.856c-.5-.5-.5-1.31 0-1.81z"
        />
        <path
          fill="currentColor"
          d="M3 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"
          opacity={0.4}
        />
      </svg>
    ))
);
ArrowLineLeftIconFillDuotone.displayName = "ArrowLineLeftIconFillDuotone";
export { ArrowLineLeftIconFillDuotone };
