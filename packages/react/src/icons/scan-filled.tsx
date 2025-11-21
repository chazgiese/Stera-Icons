import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanIconFilled = memo(
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
        <g fill="currentColor" clipPath="url(#clip0_3590_320)">
          <path d="M2 16.5A1.5 1.5 0 0 1 3.5 18v2a.5.5 0 0 0 .5.5h2a1.5 1.5 0 0 1 0 3H4A3.5 3.5 0 0 1 .5 20v-2A1.5 1.5 0 0 1 2 16.5M22 16.5a1.5 1.5 0 0 1 1.5 1.5v2a3.5 3.5 0 0 1-3.5 3.5h-2a1.5 1.5 0 0 1 0-3h2a.5.5 0 0 0 .5-.5v-2a1.5 1.5 0 0 1 1.5-1.5M6 .5a1.5 1.5 0 1 1 0 3H4a.5.5 0 0 0-.5.5v2a1.5 1.5 0 1 1-3 0V4A3.5 3.5 0 0 1 4 .5zM20 .5A3.5 3.5 0 0 1 23.5 4v2a1.5 1.5 0 0 1-3 0V4a.5.5 0 0 0-.5-.5h-2a1.5 1.5 0 0 1 0-3z" />
        </g>
      </svg>
    ))
);
ScanIconFilled.displayName = "ScanIconFilled";
export { ScanIconFilled };
