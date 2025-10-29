import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MenuSimpleAltIconFilltone = memo(
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
          d="M15 14.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M21 6.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z"
        />
      </svg>
    ))
);
MenuSimpleAltIconFilltone.displayName = "MenuSimpleAltIconFilltone";
export { MenuSimpleAltIconFilltone };
