import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListTreeIconLinetone = memo(
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
          d="M3 4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a1 1 0 1 1 0 2H6a4 4 0 0 1-2-.537V16a2 2 0 0 0 2 2h2a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4V5a1 1 0 0 1 1-1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M21 18a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM21 4a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
ListTreeIconLinetone.displayName = "ListTreeIconLinetone";
export { ListTreeIconLinetone };
