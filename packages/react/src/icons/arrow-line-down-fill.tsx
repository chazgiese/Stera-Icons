import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineDownIconFill = memo(
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
          d="M20 20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM12 2a1 1 0 0 1 1 1v6.25h4.914c1.069 0 1.604 1.293.848 2.049l-5.857 5.856c-.5.5-1.31.5-1.81 0L5.238 11.3c-.756-.756-.22-2.049.848-2.049H11V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ArrowLineDownIconFill.displayName = "ArrowLineDownIconFill";
export { ArrowLineDownIconFill };
