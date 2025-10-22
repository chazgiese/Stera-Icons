import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoreVIcon = memo(
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
          d="M13.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 20a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
      </svg>
    ))
);
MoreVIcon.displayName = "MoreVIcon";
export { MoreVIcon };
