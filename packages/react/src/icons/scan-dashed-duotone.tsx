import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanDashedIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M3 16.25a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 19v-2a.75.75 0 0 1 .75-.75M21 16.25a.75.75 0 0 1 .75.75v2A2.75 2.75 0 0 1 19 21.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 0 1 .75-.75M7 2.25a.75.75 0 0 1 0 1.5H5c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V5A2.75 2.75 0 0 1 5 2.25zM19 2.25A2.75 2.75 0 0 1 21.75 5v2a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          d="M23 11.25a.75.75 0 0 1 0 1.5H1a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ScanDashedIconDuotone.displayName = "ScanDashedIconDuotone";
export { ScanDashedIconDuotone };
