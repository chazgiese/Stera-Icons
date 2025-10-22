import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MicroscopeIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M13 6a1 1 0 1 1 0 2h-1.5a6.5 6.5 0 1 0 0 13 1 1 0 1 1 0 2 8.5 8.5 0 0 1 0-17z" />
          <path d="M19 17a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2z" />
        </g>
        <path fill="currentColor" d="M20 21a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 1a4 4 0 0 1 4 4v5.75a2.25 2.25 0 0 1-2.001 2.235L18 13a2 2 0 1 1-4 0v-.015a2.25 2.25 0 0 1-2-2.235V5a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v5.75c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V5a2 2 0 0 0-2-2"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MicroscopeIconLinetone.displayName = "MicroscopeIconLinetone";
export { MicroscopeIconLinetone };
