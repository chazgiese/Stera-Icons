import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BoundingBoxIcon = memo(
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
          d="M7 2.25a.75.75 0 0 1 .75.75v1.25h8.5V3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-1.25v8.5H21a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-1.25h-8.5V21a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h1.25v-8.5H3A.75.75 0 0 1 2.25 7V3A.75.75 0 0 1 3 2.25zm-3.25 18h2.5v-2.5h-2.5zm14 0h2.5v-2.5h-2.5zM7.75 7a.75.75 0 0 1-.75.75H5.75v8.5H7a.75.75 0 0 1 .75.75v1.25h8.5V17a.75.75 0 0 1 .75-.75h1.25v-8.5H17a.75.75 0 0 1-.75-.75V5.75h-8.5zm-4-.75h2.5v-2.5h-2.5zm14 0h2.5v-2.5h-2.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BoundingBoxIcon.displayName = "BoundingBoxIcon";
export { BoundingBoxIcon };
