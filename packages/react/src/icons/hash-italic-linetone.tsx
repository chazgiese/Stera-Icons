import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HashItalicIconLinetone = memo(
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
          <path d="M10.024 2.784a1 1 0 0 1 1.953.433l-4 18a1.002 1.002 0 0 1-1.953-.433zM16.024 2.784a1 1 0 0 1 1.953.433l-4 18a1.002 1.002 0 0 1-1.953-.433z" />
        </g>
        <path
          fill="currentColor"
          d="M19 14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 8a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
HashItalicIconLinetone.displayName = "HashItalicIconLinetone";
export { HashItalicIconLinetone };
