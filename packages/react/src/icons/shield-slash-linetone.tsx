import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldSlashIconLinetone = memo(
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
          <path d="M4 7.957a1 1 0 0 1 1 1v1.627l.007.389a11 11 0 0 0 6.074 9.449l.919.459.919-.459a11 11 0 0 0 1.694-1.048 1 1 0 0 1 1.202 1.599c-.621.467-1.29.883-2.001 1.238l-1.367.684a1 1 0 0 1-.894 0l-1.367-.684a13 13 0 0 1-7.178-11.167L3 10.584V8.957a1 1 0 0 1 1-1M11.734 1.036c.203-.056.42-.047.618.028l8 3A1 1 0 0 1 21 5v5.584c0 1.435-.236 2.835-.68 4.152a1 1 0 0 1-1.896-.638c.376-1.115.576-2.299.576-3.514v-4.89l-7-2.626-3.322 1.247a1.001 1.001 0 0 1-.703-1.874l3.673-1.377z" />
        </g>
        <path
          fill="currentColor"
          d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ShieldSlashIconLinetone.displayName = "ShieldSlashIconLinetone";
export { ShieldSlashIconLinetone };
