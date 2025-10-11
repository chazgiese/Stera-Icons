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
          d="M9 3.25a.75.75 0 0 1 .702.486L15.52 19.25H22a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.702-.486L8.48 4.75H2a.75.75 0 0 1 0-1.5zM22 3.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
OptionKeyIcon.displayName = "OptionKeyIcon";
export { OptionKeyIcon };
