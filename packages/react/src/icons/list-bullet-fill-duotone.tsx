import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListBulletIconFillDuotone = memo(
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
          <path d="M21.5 16.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3zM21.5 10.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3zM21.5 4.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 1 1 0-3z" />
        </g>
        <path
          fill="currentColor"
          d="M3 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4M3 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M3 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
      </svg>
    ))
);
ListBulletIconFillDuotone.displayName = "ListBulletIconFillDuotone";
export { ListBulletIconFillDuotone };
