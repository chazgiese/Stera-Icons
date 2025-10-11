import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanDashedIcon = memo(
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
          d="M4 15.25a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H6A2.75 2.75 0 0 1 3.25 18v-2a.75.75 0 0 1 .75-.75M20 15.25a.75.75 0 0 1 .75.75v2A2.75 2.75 0 0 1 18 20.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 0 1 .75-.75M23 11.25a.75.75 0 0 1 0 1.5H1a.75.75 0 0 1 0-1.5zM8 3.25a.75.75 0 0 1 0 1.5H6c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V6A2.75 2.75 0 0 1 6 3.25zM18 3.25A2.75 2.75 0 0 1 20.75 6v2a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ScanDashedIcon.displayName = "ScanDashedIcon";
export { ScanDashedIcon };
