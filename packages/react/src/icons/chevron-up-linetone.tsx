import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronUpIconLinetone = memo(
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
          d="M19.707 14.293a1 1 0 1 1-1.414 1.414L12 9.414l.707-.707a1 1 0 0 0 0-1.414z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.293 7.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414-1.414z"
        />
      </svg>
    ))
);
ChevronUpIconLinetone.displayName = "ChevronUpIconLinetone";
export { ChevronUpIconLinetone };
