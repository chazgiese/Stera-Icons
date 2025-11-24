import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullUpIconLinetone = memo(
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
          d="M18.293 15.707A1 1 0 0 0 19 16H5a1 1 0 0 0 .707-.293L7.414 14h9.172z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.293 7.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L12 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414z"
        />
      </svg>
    ))
);
ChevronFullUpIconLinetone.displayName = "ChevronFullUpIconLinetone";
export { ChevronFullUpIconLinetone };
