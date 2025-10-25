import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListCheckIconFilltone = memo(
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
          <path d="M22 16.5a1.5 1.5 0 0 1 0 3H11a1.5 1.5 0 0 1 0-3zM22 10.5a1.5 1.5 0 0 1 0 3H11a1.5 1.5 0 0 1 0-3zM22 4.5a1.5 1.5 0 0 1 0 3H11a1.5 1.5 0 0 1 0-3z" />
        </g>
        <path
          fill="currentColor"
          d="M5.086 15.648a1.25 1.25 0 0 1 1.828 1.705l-2.8 3a1.252 1.252 0 0 1-1.939-.136l-1.2-1.714a1.25 1.25 0 0 1 2.049-1.433l.314.449zM5.086 9.648a1.25 1.25 0 0 1 1.828 1.705l-2.8 3a1.252 1.252 0 0 1-1.939-.136l-1.2-1.714a1.25 1.25 0 0 1 2.049-1.433l.314.449zM5.086 3.648a1.25 1.25 0 0 1 1.828 1.705l-2.8 3a1.252 1.252 0 0 1-1.939-.136l-1.2-1.714A1.25 1.25 0 0 1 3.024 5.07l.314.449z"
        />
      </svg>
    ))
);
ListCheckIconFilltone.displayName = "ListCheckIconFilltone";
export { ListCheckIconFilltone };
