import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanDashedIconLinetone = memo(
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
          <path d="M4 15a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M20 15a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M8 3a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V6a3 3 0 0 1 3-3zM18 3a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
        </g>
        <path fill="currentColor" d="M23 11a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2z" />
      </svg>
    ))
);
ScanDashedIconLinetone.displayName = "ScanDashedIconLinetone";
export { ScanDashedIconLinetone };
