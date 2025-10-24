import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MenuSimpleAltIconLinetone = memo(
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
          d="M15 15a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z"
          opacity={0.32}
        />
        <path fill="currentColor" d="M21 7a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
      </svg>
    ))
);
MenuSimpleAltIconLinetone.displayName = "MenuSimpleAltIconLinetone";
export { MenuSimpleAltIconLinetone };
