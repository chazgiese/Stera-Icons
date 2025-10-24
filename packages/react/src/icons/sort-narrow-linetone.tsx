import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SortNarrowIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.32}>
          <path d="M22 11a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM19 7a1 1 0 1 1 0 2h-9a1 1 0 0 1 0-2zM16 3a1 1 0 1 1 0 2h-6a1 1 0 0 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M6 3a1 1 0 0 1 1 1v13.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4-.073.066-.008.005q-.06.048-.125.085l-.014.01a1 1 0 0 1-.333.113Q6.08 21 6 21q-.089-.001-.173-.017l-.026-.003-.048-.012q-.024-.005-.047-.012a1 1 0 0 1-.413-.249l-4-4a1 1 0 1 1 1.414-1.414L5 17.586V4a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
SortNarrowIconLinetone.displayName = "SortNarrowIconLinetone";
export { SortNarrowIconLinetone };
