import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SunriseIconFill = memo(
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
          d="M14 20.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5zM18 16.917a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5zM22 13.583a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM12 2.25A8.75 8.75 0 0 1 20.75 11a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75A8.75 8.75 0 0 1 12 2.25"
        />
      </svg>
    ))
);
SunriseIconFill.displayName = "SunriseIconFill";
export { SunriseIconFill };
