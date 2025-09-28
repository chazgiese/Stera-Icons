import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SortNarrowFilled = memo(
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
          d="M6 3a1 1 0 0 1 1 1v11h3a1 1 0 0 1 .707 1.707l-4 4-.073.066-.008.005q-.06.048-.125.085l-.014.01a1 1 0 0 1-.333.113Q6.08 21 6 21q-.09-.001-.173-.017l-.026-.003-.048-.012q-.024-.005-.047-.012a1 1 0 0 1-.413-.249l-4-4A1 1 0 0 1 2 15h3V4a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          d="M22 11a1 1 0 0 1 0 2H10a1 1 0 1 1 0-2zM19 7a1 1 0 0 1 0 2h-9a1 1 0 0 1 0-2zM16 3a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
SortNarrowFilled.displayName = "SortNarrowFilled";
export { SortNarrowFilled };
