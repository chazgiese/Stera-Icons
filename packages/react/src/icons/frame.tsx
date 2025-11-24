import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FrameIcon = memo(
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
          d="M17.5 2.25a.75.75 0 0 1 .75.75v2.75H21a.75.75 0 0 1 0 1.5h-2.75v9.5H21a.75.75 0 0 1 0 1.5h-2.75V21a.75.75 0 0 1-1.5 0v-2.75h-9.5V21a.75.75 0 0 1-1.5 0v-2.75H3a.75.75 0 0 1 0-1.5h2.75v-9.5H3a.75.75 0 0 1 0-1.5h2.75V3a.75.75 0 0 1 1.5 0v2.75h9.5V3a.75.75 0 0 1 .75-.75M7.25 16.75h9.5v-9.5h-9.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FrameIcon.displayName = "FrameIcon";
export { FrameIcon };
