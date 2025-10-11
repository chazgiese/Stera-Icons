import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsExpandIcon = memo(
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
          d="M9 3.25a.75.75 0 0 1 0 1.5H5.81L12 10.94l6.19-6.19H15a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V5.81L13.06 12l6.19 6.19V15a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h3.19L12 13.06l-6.19 6.19H9a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 1.5 0v3.19L10.94 12 4.75 5.81V9a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 4 3.25z"
        />
      </svg>
    ))
);
ArrowsExpandIcon.displayName = "ArrowsExpandIcon";
export { ArrowsExpandIcon };
