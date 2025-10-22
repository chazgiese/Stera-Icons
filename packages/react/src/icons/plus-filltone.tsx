import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PlusIconFilltone = memo(
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
          d="M12 1.5A1.5 1.5 0 0 1 13.5 3v18a1.5 1.5 0 0 1-3 0V3A1.5 1.5 0 0 1 12 1.5"
        />
        <path
          fill="currentColor"
          d="M21 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3z"
          opacity={0.32}
        />
      </svg>
    ))
);
PlusIconFilltone.displayName = "PlusIconFilltone";
export { PlusIconFilltone };
