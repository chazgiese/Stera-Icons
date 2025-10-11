import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DragHandleIconBold = memo(
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
          d="M8.5 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15.5 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4M8.5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15.5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M8.5 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15.5 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
        />
      </svg>
    ))
);
DragHandleIconBold.displayName = "DragHandleIconBold";
export { DragHandleIconBold };
