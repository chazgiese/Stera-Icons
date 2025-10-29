import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExpandSimpleAltIconFilltone = memo(
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
          <path d="M14.293 14.293a1 1 0 0 1 1.414 0L18 16.586 16.586 18l-2.293-2.293a1 1 0 0 1 0-1.414M9.707 8.293a1 1 0 0 1-1.414 1.414L6 7.414 7.414 6z" />
        </g>
        <path
          fill="currentColor"
          d="M20.293 14.293A1 1 0 0 1 22 15v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-.707-1.707zM9 2a1 1 0 0 1 .707 1.707l-6 6A1 1 0 0 1 2 9V3a1 1 0 0 1 1-1z"
        />
      </svg>
    ))
);
ExpandSimpleAltIconFilltone.displayName = "ExpandSimpleAltIconFilltone";
export { ExpandSimpleAltIconFilltone };
