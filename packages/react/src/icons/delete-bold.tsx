import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DeleteIconBold = memo(
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
          d="M15.293 8.293a1 1 0 1 1 1.414 1.414L14.414 12l2.293 2.293a1 1 0 1 1-1.414 1.414L13 13.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L11.586 12 9.293 9.707a1 1 0 1 1 1.414-1.414L13 10.586z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H9.217a5 5 0 0 1-4.24-2.35l-3.162-5.06a3 3 0 0 1 0-3.18l3.162-5.06A5 5 0 0 1 9.217 3zM9.217 5a3 3 0 0 0-2.544 1.41l-3.162 5.06a1 1 0 0 0 0 1.06l3.162 5.06A3 3 0 0 0 9.217 19H18a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DeleteIconBold.displayName = "DeleteIconBold";
export { DeleteIconBold };
