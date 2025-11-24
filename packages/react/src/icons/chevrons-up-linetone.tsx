import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronsUpIconLinetone = memo(
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
          d="M12 11a1 1 0 0 1 .707.293l7 7a1 1 0 1 1-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 1 1-1.414-1.414l7-7A1 1 0 0 1 12 11"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 3a1 1 0 0 1 .707.293l7 7a1 1 0 1 1-1.414 1.414L12 5.414l-6.293 6.293a1 1 0 1 1-1.414-1.414l7-7A1 1 0 0 1 12 3"
        />
      </svg>
    ))
);
ChevronsUpIconLinetone.displayName = "ChevronsUpIconLinetone";
export { ChevronsUpIconLinetone };
