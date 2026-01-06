import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanSearchIconFill = memo(
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
          d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11 5.5a5.5 5.5 0 0 1 4.924 7.95l1.813 1.813a1.75 1.75 0 1 1-2.474 2.474l-1.814-1.813A5.5 5.5 0 1 1 11 5.5m0 3a2.5 2.5 0 0 0 0 5c.665 0 1.268-.262 1.716-.687q.022-.025.047-.05t.05-.047c.425-.448.687-1.05.687-1.716A2.5 2.5 0 0 0 11 8.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ScanSearchIconFill.displayName = "ScanSearchIconFill";
export { ScanSearchIconFill };
