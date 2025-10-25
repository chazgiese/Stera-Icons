import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoreIconLinetone = memo(
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
          d="M4 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M20 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
        <path
          fill="currentColor"
          d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
          opacity={0.4}
        />
      </svg>
    ))
);
MoreIconLinetone.displayName = "MoreIconLinetone";
export { MoreIconLinetone };
