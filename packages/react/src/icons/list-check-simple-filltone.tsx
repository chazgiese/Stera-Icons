import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListCheckSimpleIconFilltone = memo(
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
          <path d="M22 14a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1 0-3zM22 7a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1 0-3z" />
        </g>
        <path
          fill="currentColor"
          d="M6.966 12.415a1.5 1.5 0 1 1 2.068 2.172l-4.2 4a1.5 1.5 0 0 1-2.213-.159l-1.8-2.285a1.5 1.5 0 0 1 2.358-1.856l.78.991zM6.966 5.415a1.5 1.5 0 1 1 2.068 2.172l-4.2 4a1.5 1.5 0 0 1-2.213-.159l-1.8-2.285A1.5 1.5 0 0 1 3.18 7.287l.78.991z"
        />
      </svg>
    ))
);
ListCheckSimpleIconFilltone.displayName = "ListCheckSimpleIconFilltone";
export { ListCheckSimpleIconFilltone };
