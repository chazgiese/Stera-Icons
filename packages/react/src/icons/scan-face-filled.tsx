import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanFaceIconFilled = memo(
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
          d="M2 17a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M22 17a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4.25a7.75 7.75 0 1 1 0 15.5 7.75 7.75 0 0 1 0-15.5m3.251 9.15a.75.75 0 0 0-1.05.15A2.75 2.75 0 0 1 12 14.65a2.75 2.75 0 0 1-2.2-1.1.75.75 0 0 0-1.2.9 4.247 4.247 0 0 0 6.8 0 .75.75 0 0 0-.149-1.05M9.55 9.025a1.225 1.225 0 1 0 0 2.45 1.225 1.225 0 0 0 0-2.45m4.9 0a1.224 1.224 0 1 0 0 2.449 1.224 1.224 0 0 0 0-2.449"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M6 1a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V4a3 3 0 0 1 3-3zM20 1a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ScanFaceIconFilled.displayName = "ScanFaceIconFilled";
export { ScanFaceIconFilled };
