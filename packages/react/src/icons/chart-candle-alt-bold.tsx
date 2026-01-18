import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartCandleAltIconBold = memo(
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
          fillRule="evenodd"
          d="M4 5a1 1 0 0 1 1 1v3.015a2.25 2.25 0 0 1 2 2.235v5.5c0 1.158-.875 2.11-2 2.234V20a1 1 0 1 1-2 0v-1.016a2.25 2.25 0 0 1-2-2.234v-5.5a2.25 2.25 0 0 1 2-2.235V6a1 1 0 0 1 1-1m-.75 6a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25zM20 3a1 1 0 0 1 1 1v1.015a2.25 2.25 0 0 1 2 2.235v8.5c0 1.158-.875 2.11-2 2.234V19a1 1 0 1 1-2 0v-1.016a2.25 2.25 0 0 1-2-2.234v-8.5a2.25 2.25 0 0 1 2-2.235V4a1 1 0 0 1 1-1m-.75 4a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25zM12 5a1 1 0 0 1 1 1v1.015a2.25 2.25 0 0 1 2 2.235v3.5c0 1.158-.875 2.11-2 2.234V18a1 1 0 1 1-2 0v-3.016a2.25 2.25 0 0 1-2-2.234v-3.5a2.25 2.25 0 0 1 2-2.235V6a1 1 0 0 1 1-1m-.75 4a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartCandleAltIconBold.displayName = "ChartCandleAltIconBold";
export { ChartCandleAltIconBold };
