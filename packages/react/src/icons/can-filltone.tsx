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
          d="M15.42 2a2 2 0 0 1 1.736 1.008l1.317 2.305A4 4 0 0 1 19 7.297v9.406a4 4 0 0 1-.527 1.985l-1.317 2.304A2 2 0 0 1 15.42 22H8.58a2 2 0 0 1-1.736-1.008l-1.317-2.305A4 4 0 0 1 5 16.704V7.297a4 4 0 0 1 .527-1.984l1.317-2.305A2 2 0 0 1 8.58 2z"
          opacity={0.32}
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
