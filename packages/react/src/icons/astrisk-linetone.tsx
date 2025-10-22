import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AstriskIconLinetone = memo(
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
          d="M20.163 6.13a1 1 0 0 1 1 1.733L13 12.575V22a1 1 0 1 1-2 0V12.57L2.847 7.863a1 1 0 0 1 1-1.733l8.158 4.71z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12 1a1 1 0 0 1 1 1v9.413l8.168 4.717a1 1 0 1 1-1 1.731l-8.164-4.713-8.161 4.713a1 1 0 0 1-1-1.731L11 11.42V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
AstriskIconLinetone.displayName = "AstriskIconLinetone";
export { AstriskIconLinetone };
