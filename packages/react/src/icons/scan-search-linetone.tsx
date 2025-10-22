import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanSearchIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M2 17a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M22 17a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M6 1a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V4a3 3 0 0 1 3-3zM20 1a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.5 5.5a5.5 5.5 0 0 1 4.67 8.402l2.714 2.714a1.25 1.25 0 0 1-1.768 1.768l-2.714-2.714A5.5 5.5 0 1 1 10.5 5.5m0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScanSearchIconLinetone.displayName = "ScanSearchIconLinetone";
export { ScanSearchIconLinetone };
