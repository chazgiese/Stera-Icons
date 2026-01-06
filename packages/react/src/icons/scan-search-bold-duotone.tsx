import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanSearchIconBoldDuotone = memo(
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
          d="M11 6a5 5 0 0 1 4.307 7.54l2.077 2.076a1.25 1.25 0 0 1-1.768 1.768l-2.077-2.077A5 5 0 1 1 11 6m0 2a3 3 0 0 0 0 6c.803 0 1.53-.318 2.07-.832l.046-.052.054-.05c.513-.538.83-1.264.83-2.066a3 3 0 0 0-3-3"
          clipRule="evenodd"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1M21 16a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1M7 2a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3zM19 2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2z" />
        </g>
      </svg>
    ))
);
ScanSearchIconBoldDuotone.displayName = "ScanSearchIconBoldDuotone";
export { ScanSearchIconBoldDuotone };
