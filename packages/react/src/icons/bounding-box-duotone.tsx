import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BoundingBoxIconDuotone = memo(
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
          d="M7 16.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75zm-3.25 4h2.5v-2.5h-2.5zM21 16.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75zm-3.25 4h2.5v-2.5h-2.5zM7 2.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H3A.75.75 0 0 1 2.25 7V3A.75.75 0 0 1 3 2.25zm-3.25 4h2.5v-2.5h-2.5zM21 2.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 .75-.75zm-3.25 4h2.5v-2.5h-2.5z"
          clipRule="evenodd"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M16.25 19.75h-8.5v-1.5h8.5zM19.75 16.25h-1.5v-8.5h1.5zM5.75 16.25h-1.5v-8.5h1.5zM16.25 5.75h-8.5v-1.5h8.5z" />
        </g>
      </svg>
    ))
);
BoundingBoxIconDuotone.displayName = "BoundingBoxIconDuotone";
export { BoundingBoxIconDuotone };
