import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DragHandleIconFilltone = memo(
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
          d="M16 1a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4M9 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M9 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
      </svg>
    ))
);
DragHandleIconFilltone.displayName = "DragHandleIconFilltone";
export { DragHandleIconFilltone };
