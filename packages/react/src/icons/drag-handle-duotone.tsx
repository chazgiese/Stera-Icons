import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DragHandleIconDuotone = memo(
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
          <path d="M17 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M17 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M17 19a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        </g>
        <path
          fill="currentColor"
          d="M10 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10 19a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
      </svg>
    ))
);
DragHandleIconDuotone.displayName = "DragHandleIconDuotone";
export { DragHandleIconDuotone };
