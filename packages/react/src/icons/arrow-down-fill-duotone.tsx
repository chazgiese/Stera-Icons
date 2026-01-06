import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowDownIconFillDuotone = memo(
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
          d="M12 4a1 1 0 0 1 1 1v7h-2V5a1 1 0 0 1 1-1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18 12a1 1 0 0 1 .707 1.707l-6 6a1 1 0 0 1-1.414 0l-6-6A1 1 0 0 1 6 12z"
        />
      </svg>
    ))
);
ArrowDownIconFillDuotone.displayName = "ArrowDownIconFillDuotone";
export { ArrowDownIconFillDuotone };
