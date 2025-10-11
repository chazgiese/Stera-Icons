import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListIcon = memo(
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
          d="M4.077 16.254A.75.75 0 0 1 4.75 17v2l-.004.077A.75.75 0 0 1 4 19.75H2a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 .75-.75h2zM22 17.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM4.077 10.254A.75.75 0 0 1 4.75 11v2l-.004.077A.75.75 0 0 1 4 13.75H2a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 .75-.75h2zM22 11.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM4.077 4.254A.75.75 0 0 1 4.75 5v2l-.004.077A.75.75 0 0 1 4 7.75H2A.75.75 0 0 1 1.25 7V5A.75.75 0 0 1 2 4.25h2zM22 5.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ListIcon.displayName = "ListIcon";
export { ListIcon };
