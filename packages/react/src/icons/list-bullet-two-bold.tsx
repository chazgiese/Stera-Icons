import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListBulletTwoBold = memo(
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
          d="M3.5 13a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M22 14.5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM3.5 6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M22 7.5a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
ListBulletTwoBold.displayName = "ListBulletTwoBold";
export { ListBulletTwoBold };
