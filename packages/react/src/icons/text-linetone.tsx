import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextIconLinetone = memo(
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
          d="M15 20a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM18 2a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11 5a1 1 0 0 0-1-1h4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h-4a1 1 0 0 0 1-1z"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
TextIconLinetone.displayName = "TextIconLinetone";
export { TextIconLinetone };
