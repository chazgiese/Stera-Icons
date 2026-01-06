import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldSlashIconDuotone = memo(
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
          <path d="M4 8.207a.75.75 0 0 1 .75.75v1.627a11.25 11.25 0 0 0 6.219 10.062L12 21.16l1.031-.515a11.3 11.3 0 0 0 1.733-1.072.75.75 0 1 1 .901 1.199c-.61.458-1.266.866-1.963 1.214l-1.367.684a.75.75 0 0 1-.67 0l-1.367-.684A12.75 12.75 0 0 1 3.25 10.584V8.957a.75.75 0 0 1 .75-.75M11.736 1.298a.75.75 0 0 1 .528 0l8 3A.75.75 0 0 1 20.75 5v5.584c0 1.408-.232 2.78-.668 4.072a.75.75 0 1 1-1.42-.48c.383-1.139.588-2.35.588-3.592V5.52L12 2.8 8.59 4.08a.75.75 0 0 1-.527-1.404z" />
        </g>
        <path
          fill="currentColor"
          d="M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
ShieldSlashIconDuotone.displayName = "ShieldSlashIconDuotone";
export { ShieldSlashIconDuotone };
