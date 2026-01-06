import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const OptionKeyIcon = memo(
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
          d="M9 4.25c.3 0 .571.179.69.454l5.805 13.546H21a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.69-.454L8.506 5.75H3a.75.75 0 0 1 0-1.5zM21 4.25a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
OptionKeyIcon.displayName = "OptionKeyIcon";
export { OptionKeyIcon };
