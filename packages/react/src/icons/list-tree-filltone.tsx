import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListTreeIconFilltone = memo(
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
          d="M3 3.5A1.5 1.5 0 0 1 4.5 5v4A1.5 1.5 0 0 0 6 10.5h2a1.5 1.5 0 0 1 0 3H6c-.526 0-1.03-.092-1.5-.258V16A1.5 1.5 0 0 0 6 17.5h2a1.5 1.5 0 0 1 0 3H6A4.5 4.5 0 0 1 1.5 16V5A1.5 1.5 0 0 1 3 3.5"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M21 17.5a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3zM21 10.5a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3zM21 3.5a1.5 1.5 0 0 1 0 3H8a1.5 1.5 0 1 1 0-3z"
        />
      </svg>
    ))
);
ListTreeIconFilltone.displayName = "ListTreeIconFilltone";
export { ListTreeIconFilltone };
