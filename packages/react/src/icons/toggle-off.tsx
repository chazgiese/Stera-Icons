import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToggleOff = memo(
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
          d="M9 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15 4.25a7.75 7.75 0 0 1 0 15.5H9a7.75 7.75 0 0 1-.398-15.49L9 4.25zm-6 1.5-.321.008A6.25 6.25 0 0 0 9 18.25h6a6.25 6.25 0 1 0 0-12.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ToggleOff.displayName = "ToggleOff";
export { ToggleOff };
