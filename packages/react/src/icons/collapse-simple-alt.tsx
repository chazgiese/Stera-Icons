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
          d="M21 14.25a.75.75 0 0 1 0 1.5h-4.19l4.72 4.72a.75.75 0 1 1-1.06 1.06l-4.72-4.72V21a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75zM9 2.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h4.19L2.47 3.53a.75.75 0 1 1 1.06-1.06l4.72 4.72V3A.75.75 0 0 1 9 2.25"
        />
      </svg>
    ))
);
CollapseSimpleAltIcon.displayName = "CollapseSimpleAltIcon";
export { CollapseSimpleAltIcon };
