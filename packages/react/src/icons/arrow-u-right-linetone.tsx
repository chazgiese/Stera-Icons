import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowURightIconLinetone = memo(
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
          d="M8.5 3a7.5 7.5 0 1 0 0 15H22a1 1 0 1 0 0-2H8.5a5.5 5.5 0 1 1 0-11H16a1 1 0 1 0 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.707 12.293a1 1 0 1 0-1.414 1.414L20.586 17l-3.293 3.293a1 1 0 0 0 1.414 1.414l4-4 .066-.073a1 1 0 0 0-.066-1.341z"
        />
      </svg>
    ))
);
ArrowURightIconLinetone.displayName = "ArrowURightIconLinetone";
export { ArrowURightIconLinetone };
