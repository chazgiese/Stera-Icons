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
        <g fill="currentColor" opacity={0.4}>
          <path d="M4.868 15.99h-.017l-.028-.007zM4.121 14.523l-.014.026.01-.018zM12 7a1 1 0 0 1 .707.293l7 7A1 1 0 0 0 19 14H5a1 1 0 0 0-.707.293l7-7A1 1 0 0 1 12 7" />
        </g>
        <path fill="currentColor" d="M19 14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2z" />
      </svg>
    ))
);
ChevronFullUpIconFilltone.displayName = "ChevronFullUpIconFilltone";
export { ChevronFullUpIconFilltone };
