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
          d="M15.53 14.47a.75.75 0 1 0-1.06 1.06l4.72 4.72H16a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 .75-.75v-5a.75.75 0 0 0-1.5 0v3.19zM3 2.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0V4.81l4.72 4.72a.75.75 0 1 0 1.06-1.06L4.81 3.75H8a.75.75 0 0 0 0-1.5z"
        />
      </svg>
    ))
);
ExpandSimpleAltIcon.displayName = "ExpandSimpleAltIcon";
export { ExpandSimpleAltIcon };
