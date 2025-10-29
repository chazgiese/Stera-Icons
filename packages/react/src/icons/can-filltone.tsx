import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CanIconFilltone = memo(
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
          d="M18.473 5.313A4 4 0 0 1 19 7.297v9.406a4 4 0 0 1-.527 1.985l-1.317 2.304A2 2 0 0 1 15.42 22H8.58a2 2 0 0 1-1.736-1.008l-1.317-2.305A4 4 0 0 1 5 16.704V7.297a4 4 0 0 1 .527-1.984l.762-1.336q.102.022.211.023h11q.108-.001.21-.023z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M17.5 2a1 1 0 1 1 0 2h-11a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
CanIconFilltone.displayName = "CanIconFilltone";
export { CanIconFilltone };
