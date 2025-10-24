import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsLeftRightIconLinetone = memo(
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
          <path d="M20.5 16.5a1 1 0 1 1 0 2h-18a1 1 0 1 1 0-2zM21.5 6.5a1 1 0 1 1 0 2h-18a1 1 0 0 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M5.793 12.793a1 1 0 0 1 1.414 1.414L3.914 17.5l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1-.068-1.338l.068-.076zM16.793 2.793a1 1 0 0 1 1.414 0l4 4 .067.073a1 1 0 0 1-.067 1.341l-4 4a1 1 0 0 1-1.414-1.414L20.086 7.5l-3.293-3.293a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ArrowsLeftRightIconLinetone.displayName = "ArrowsLeftRightIconLinetone";
export { ArrowsLeftRightIconLinetone };
