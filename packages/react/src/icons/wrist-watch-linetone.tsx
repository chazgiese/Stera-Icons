import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WristWatchIconLinetone = memo(
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
          <path d="M9 18v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3h2v3a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-3zM14 0a3 3 0 0 1 3 3v3h-2V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3H7V3a3 3 0 0 1 3-3z" />
        </g>
        <path
          fill="currentColor"
          d="M12 8.5a1 1 0 0 1 1 1v2.086l1.207 1.207a1 1 0 1 1-1.414 1.414l-1.5-1.5A1 1 0 0 1 11 12V9.5a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16m0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WristWatchIconLinetone.displayName = "WristWatchIconLinetone";
export { WristWatchIconLinetone };
