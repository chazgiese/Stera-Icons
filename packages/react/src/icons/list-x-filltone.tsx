import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListXIconFilltone = memo(
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
          <path d="M9 14.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM9 9.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM22 4.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 1 1 0-3z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.5 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m2.404 3.096a.9.9 0 0 0-1.273 0l-1.131 1.13-1.13-1.13a.9.9 0 0 0-1.274 1.273l1.13 1.131-1.13 1.13a.9.9 0 0 0 1.273 1.274l1.131-1.13 1.13 1.13a.9.9 0 0 0 1.274-1.273l-1.13-1.131 1.13-1.13a.9.9 0 0 0 0-1.274"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ListXIconFilltone.displayName = "ListXIconFilltone";
export { ListXIconFilltone };
