import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DragHandleIconLinetone = memo(
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
          <path d="M15.5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15.5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15.5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        </g>
        <path
          fill="currentColor"
          d="M8.5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8.5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8.5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
        />
      </svg>
    ))
);
DragHandleIconLinetone.displayName = "DragHandleIconLinetone";
export { DragHandleIconLinetone };
