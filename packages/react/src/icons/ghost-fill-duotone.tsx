import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GhostIconFillDuotone = memo(
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
          d="M12 1a9 9 0 0 1 9 9v12a1 1 0 0 1-1.555.832l-2.391-1.595-1.929 1.544a1 1 0 0 1-1.25 0L12 21.281l-1.875 1.5a1 1 0 0 1-1.25 0l-1.93-1.544-2.39 1.595A1 1 0 0 1 3 22V10a9 9 0 0 1 9-9M9 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
      </svg>
    ))
);
GhostIconFillDuotone.displayName = "GhostIconFillDuotone";
export { GhostIconFillDuotone };
