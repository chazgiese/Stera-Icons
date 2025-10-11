import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanFaceIcon = memo(
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
          d="M2 17.25a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5H4A2.75 2.75 0 0 1 1.25 20v-2a.75.75 0 0 1 .75-.75M22 17.25a.75.75 0 0 1 .75.75v2A2.75 2.75 0 0 1 20 22.75h-2a.75.75 0 0 1 0-1.5h2c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 0 1 .75-.75M14.201 13.65a.75.75 0 0 1 1.2.9 4.247 4.247 0 0 1-6.8 0 .75.75 0 1 1 1.199-.9c.503.669 1.301 1.1 2.2 1.1s1.698-.431 2.201-1.1M9.55 9.2a1.05 1.05 0 1 1 0 2.102 1.05 1.05 0 0 1 0-2.102M14.45 9.2a1.051 1.051 0 1 1 0 2.103 1.051 1.051 0 0 1 0-2.103"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4.25a7.75 7.75 0 1 1 0 15.5 7.75 7.75 0 0 1 0-15.5m0 1.5a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M6 1.25a.75.75 0 0 1 0 1.5H4c-.69 0-1.25.56-1.25 1.25v2a.75.75 0 0 1-1.5 0V4A2.75 2.75 0 0 1 4 1.25zM20 1.25A2.75 2.75 0 0 1 22.75 4v2a.75.75 0 0 1-1.5 0V4c0-.69-.56-1.25-1.25-1.25h-2a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ScanFaceIcon.displayName = "ScanFaceIcon";
export { ScanFaceIcon };
