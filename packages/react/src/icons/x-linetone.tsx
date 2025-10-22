import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const XIconLinetone = memo(
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
          d="M18.293 4.293a1 1 0 1 1 1.414 1.414l-14 14a1 1 0 0 1-1.414-1.414z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M4.293 4.293a1 1 0 0 1 1.414 0l14 14a1 1 0 0 1-1.414 1.414l-14-14a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
XIconLinetone.displayName = "XIconLinetone";
export { XIconLinetone };
