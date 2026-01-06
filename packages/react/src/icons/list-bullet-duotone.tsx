import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListBulletIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M22 17.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM22 11.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM22 5.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          d="M3 16.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M3 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M3 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
ListBulletIconDuotone.displayName = "ListBulletIconDuotone";
export { ListBulletIconDuotone };
