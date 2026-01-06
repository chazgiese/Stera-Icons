import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldBanIconDuotone = memo(
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
          d="M17.898 15.925q-.36.668-.807 1.283L4.75 6.63V5.52l.701-.264z"
          opacity={0.4}
        />
        <path
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m4 5 8-3 8 3v5.584a12 12 0 0 1-6.633 10.733L12 22l-1.367-.683A12 12 0 0 1 4 10.584z"
        />
      </svg>
    ))
);
ShieldBanIconDuotone.displayName = "ShieldBanIconDuotone";
export { ShieldBanIconDuotone };
