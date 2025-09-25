import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TogglesFilled = memo(
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
        <path fill="currentColor" d="M8 16.25a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 13.25a5 5 0 0 1 0 10H8a5 5 0 0 1 0-10zm-8 2a3 3 0 1 0 0 6h8a3 3 0 1 0 0-6zM16 1.25a5 5 0 0 1 0 10H8a5 5 0 0 1 0-10zm0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TogglesFilled.displayName = "TogglesFilled";
export { TogglesFilled };
