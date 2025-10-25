import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullUpIconFilltone = memo(
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
          d="M12 7a1 1 0 0 1 .707.293l7 7A1 1 0 0 1 19 16H5l-.15-.01a1 1 0 0 1-.557-1.697l7-7A1 1 0 0 1 12 7"
          opacity={0.4}
        />
        <path fill="currentColor" d="M19 14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2z" />
      </svg>
    ))
);
ChevronFullUpIconFilltone.displayName = "ChevronFullUpIconFilltone";
export { ChevronFullUpIconFilltone };
