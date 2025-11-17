import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanTextIcon = memo(
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
          d="M2 17.25a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H4A2.75 2.75 0 0 1 1.25 20v-2a.75.75 0 0 1 .75-.75M22 17.25a.75.75 0 0 1 .75.75v2A2.75 2.75 0 0 1 20 22.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 0 1 .75-.75M13 15.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM17 11.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM17 7.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM6 1.25a.75.75 0 0 1 0 1.5H4c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V4A2.75 2.75 0 0 1 4 1.25zM20 1.25A2.75 2.75 0 0 1 22.75 4v2a.75.75 0 0 1-1.5 0V4c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ScanTextIcon.displayName = "ScanTextIcon";
export { ScanTextIcon };
