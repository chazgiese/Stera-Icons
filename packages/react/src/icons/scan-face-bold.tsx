import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanFaceIconBold = memo(
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
          d="M2 17a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M22 17a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M14.201 13.55a.75.75 0 0 1 1.2.9 4.247 4.247 0 0 1-6.8 0 .75.75 0 1 1 1.199-.9c.503.67 1.301 1.1 2.2 1.1s1.698-.43 2.201-1.1M9.55 9.023a1.226 1.226 0 1 1 0 2.451 1.226 1.226 0 0 1 0-2.45M14.45 9.023a1.225 1.225 0 1 1 0 2.45 1.225 1.225 0 0 1 0-2.45"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16m0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M6 1a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V4a3 3 0 0 1 3-3zM20 1a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ScanFaceIconBold.displayName = "ScanFaceIconBold";
export { ScanFaceIconBold };
