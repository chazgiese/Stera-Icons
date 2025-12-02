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
        <path
          fill="currentColor"
          d="M3 15.5A1.5 1.5 0 0 1 4.5 17v2a.5.5 0 0 0 .5.5h2a1.5 1.5 0 0 1 0 3H5A3.5 3.5 0 0 1 1.5 19v-2A1.5 1.5 0 0 1 3 15.5M21 15.5a1.5 1.5 0 0 1 1.5 1.5v2a3.5 3.5 0 0 1-3.5 3.5h-2a1.5 1.5 0 0 1 0-3h2a.5.5 0 0 0 .5-.5v-2a1.5 1.5 0 0 1 1.5-1.5M7 1.5a1.5 1.5 0 1 1 0 3H5a.5.5 0 0 0-.5.5v2a1.5 1.5 0 1 1-3 0V5A3.5 3.5 0 0 1 5 1.5zM19 1.5A3.5 3.5 0 0 1 22.5 5v2a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 0-.5-.5h-2a1.5 1.5 0 0 1 0-3z"
        />
      </svg>
    ))
);
ScanIconFilled.displayName = "ScanIconFilled";
export { ScanIconFilled };
