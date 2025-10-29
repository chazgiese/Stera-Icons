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
        <g fill="currentColor" opacity={0.4}>
          <path d="M8.293 14.293a1 1 0 1 1 1.414 1.414L7.414 18 6 16.586zM14.293 14.293a1 1 0 0 1 1.414 0L18 16.586 16.586 18l-2.293-2.293a1 1 0 0 1 0-1.414M9.707 8.293a1 1 0 0 1-1.414 1.414L6 7.414 7.414 6zM18 7.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L16.586 6z" />
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
