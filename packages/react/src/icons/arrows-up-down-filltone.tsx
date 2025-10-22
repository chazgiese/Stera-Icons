import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsUpDownIconFilltone = memo(
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
          <path d="M17 3a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M7 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          d="M21 17a1 1 0 0 1 .707 1.707l-4 4a1 1 0 0 1-1.338.068l-.076-.068-4-4A1 1 0 0 1 13 17zM7 2a1 1 0 0 1 .707.293l4 4A1 1 0 0 1 11 8H3a1 1 0 0 1-.707-1.707l4-4 .073-.066A1 1 0 0 1 7 2"
        />
      </svg>
    ))
);
ArrowsUpDownIconFilltone.displayName = "ArrowsUpDownIconFilltone";
export { ArrowsUpDownIconFilltone };
