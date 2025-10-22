import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListBulletIconLinetone = memo(
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
          <path d="M22 17a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM22 5a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M3 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4M3 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M3 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
      </svg>
    ))
);
ListBulletIconLinetone.displayName = "ListBulletIconLinetone";
export { ListBulletIconLinetone };
