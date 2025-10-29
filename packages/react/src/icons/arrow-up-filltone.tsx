import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpIconFilltone = memo(
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
          d="M13 12v7a1 1 0 1 1-2 0v-7z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 4a1 1 0 0 1 .707.293l6 6A1 1 0 0 1 18 12H6a1 1 0 0 1-.707-1.707l6-6A1 1 0 0 1 12 4"
        />
      </svg>
    ))
);
ArrowUpIconFilltone.displayName = "ArrowUpIconFilltone";
export { ArrowUpIconFilltone };
