import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CollapseSimpleAltIconFilltone = memo(
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
          <path d="M21.707 20.293a1 1 0 0 1-1.414 1.414L18 19.414 19.414 18zM2.293 2.293a1 1 0 0 1 1.414 0L6 4.586 4.586 6 2.293 3.707a1 1 0 0 1 0-1.414" />
        </g>
        <path
          fill="currentColor"
          d="M21 14a1 1 0 0 1 .707 1.707l-6 6A1 1 0 0 1 14 21v-6a1 1 0 0 1 1-1zM8.293 2.293A1 1 0 0 1 10 3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-.707-1.707z"
        />
      </svg>
    ))
);
CollapseSimpleAltIconFilltone.displayName = "CollapseSimpleAltIconFilltone";
export { CollapseSimpleAltIconFilltone };
