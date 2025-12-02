import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ConnectionIconFilltone = memo(
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
          <path d="M6.5 13.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5M17.5 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5" />
        </g>
        <path
          fill="currentColor"
          d="M6.5 2.25a4.25 4.25 0 0 1 3.628 6.464l5.157 5.157a4.25 4.25 0 1 1-1.414 1.414l-5.157-5.157A4.25 4.25 0 1 1 6.5 2.25"
        />
      </svg>
    ))
);
ConnectionIconFilltone.displayName = "ConnectionIconFilltone";
export { ConnectionIconFilltone };
