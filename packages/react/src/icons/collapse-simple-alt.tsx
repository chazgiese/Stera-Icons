import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseSimpleAltIcon = memo(
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
          d="M15 14.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-3.19l4.72 4.72a.75.75 0 1 0 1.06-1.06l-4.72-4.72H20a.75.75 0 0 0 0-1.5zM3.53 2.47a.75.75 0 1 0-1.06 1.06l4.72 4.72H4a.75.75 0 0 0 0 1.5h5A.75.75 0 0 0 9.75 9V4a.75.75 0 0 0-1.5 0v3.19z"
        />
      </svg>
    ))
);
CollapseSimpleAltIcon.displayName = "CollapseSimpleAltIcon";
export { CollapseSimpleAltIcon };
