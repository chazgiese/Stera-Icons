import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandIconFilltone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M8.293 14.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414-1.414zM14.293 14.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414M3.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414M19.293 3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414-1.414z" />
        </g>
        <path
          fill="currentColor"
          d="M3.617 15.076a1 1 0 0 1 1.09.217l4 4A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .617-.924M19.293 15.293A1 1 0 0 1 21 16v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-.707-1.707zM8 3a1 1 0 0 1 .707 1.707l-4 4A1 1 0 0 1 3 8V4a1 1 0 0 1 1-1zM20 3a1 1 0 0 1 1 1v4a1 1 0 0 1-1.707.707l-4-4A1 1 0 0 1 16 3z"
        />
      </svg>
    ))
);
ExpandIconFilltone.displayName = "ExpandIconFilltone";
export { ExpandIconFilltone };
