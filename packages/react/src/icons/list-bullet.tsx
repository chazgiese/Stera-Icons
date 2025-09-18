import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListBullet = memo(
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
          d="M3 16.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M22 17.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM3 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M22 11.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM3 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M22 5.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ListBullet.displayName = "ListBullet";
export { ListBullet };
