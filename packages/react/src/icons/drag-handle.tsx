import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DragHandle = memo(
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
          d="M8.5 17.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 17.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M8.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M8.5 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
DragHandle.displayName = "DragHandle";
export { DragHandle };
