import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanTextIconDuotone = memo(
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
          <path d="M3 16.25a.75.75 0 0 1 .75.75v2.5c0 .414.336.75.75.75H7a.75.75 0 0 1 0 1.5H4.5a2.25 2.25 0 0 1-2.25-2.25V17a.75.75 0 0 1 .75-.75M21 16.25a.75.75 0 0 1 .75.75v2.5a2.25 2.25 0 0 1-2.25 2.25H17a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 0 .75-.75V17a.75.75 0 0 1 .75-.75M7 2.25a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 0-.75.75V7a.75.75 0 0 1-1.5 0V4.5A2.25 2.25 0 0 1 4.5 2.25zM19.5 2.25a2.25 2.25 0 0 1 2.25 2.25V7a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 0-.75-.75H17a.75.75 0 0 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          d="M13 14.75a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM17 11.25a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5zM17 7.75a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ScanTextIconDuotone.displayName = "ScanTextIconDuotone";
export { ScanTextIconDuotone };
