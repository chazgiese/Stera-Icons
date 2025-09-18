import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListBulletTwo = memo(
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
          d="M3.5 13.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M22 14.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM3.5 6.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M22 7.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ListBulletTwo.displayName = "ListBulletTwo";
export { ListBulletTwo };
