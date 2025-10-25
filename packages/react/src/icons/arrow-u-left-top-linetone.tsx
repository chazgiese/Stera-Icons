import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowULeftTopIconLinetone = memo(
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
          d="M15.5 6a7.5 7.5 0 0 1 0 15H8a1 1 0 1 1 0-2h7.5a5.5 5.5 0 1 0 0-11H2a1 1 0 0 1 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.293 2.293a1 1 0 1 1 1.414 1.414L3.414 7l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1-.066-1.34l.066-.074z"
        />
      </svg>
    ))
);
ArrowULeftTopIconLinetone.displayName = "ArrowULeftTopIconLinetone";
export { ArrowULeftTopIconLinetone };
