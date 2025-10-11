import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsCollapseIcon = memo(
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
          d="M10 13.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-4.19l-5.72 5.72a.75.75 0 1 1-1.06-1.06l5.72-5.72H4a.75.75 0 0 1 0-1.5zM20.47 2.47a.75.75 0 1 1 1.06 1.06l-5.72 5.72H20a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v4.19z"
        />
      </svg>
    ))
);
ArrowsCollapseIcon.displayName = "ArrowsCollapseIcon";
export { ArrowsCollapseIcon };
