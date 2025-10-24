import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandSimpleAltIcon = memo(
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
          d="M21 14.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h4.19l-4.72-4.72a.75.75 0 1 1 1.06-1.06l4.72 4.72V15a.75.75 0 0 1 .75-.75M9 2.25a.75.75 0 0 1 0 1.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06L3.75 4.81V9a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25z"
        />
      </svg>
    ))
);
ExpandSimpleAltIcon.displayName = "ExpandSimpleAltIcon";
export { ExpandSimpleAltIcon };
