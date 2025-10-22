import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BladeKunaiIconLinetone = memo(
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
          d="M17.793 4.793a1 1 0 1 1 1.414 1.414l-4.273 4.273-.948 5.684a1 1 0 0 1-.507.714l-11 6a1 1 0 0 1-1.357-1.357l6-11 .06-.097a1 1 0 0 1 .654-.41l5.684-.948zm-9.148 7.112-4.14 7.59 7.589-4.14.69-4.14z"
          clipRule="evenodd"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M11.793 7.793a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BladeKunaiIconLinetone.displayName = "BladeKunaiIconLinetone";
export { BladeKunaiIconLinetone };
