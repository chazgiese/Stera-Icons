import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListExpandIconFilltone = memo(
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
          <path d="M11 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM11 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM11 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M21 14.5a1 1 0 0 1 .707 1.707l-3.001 3a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 15 14.5zM17.999 4.5a1 1 0 0 1 .707.293l3.001 3A1 1 0 0 1 21 9.5h-6a1 1 0 0 1-.707-1.707l2.999-3a1 1 0 0 1 .707-.293"
        />
      </svg>
    ))
);
ListExpandIconFilltone.displayName = "ListExpandIconFilltone";
export { ListExpandIconFilltone };
