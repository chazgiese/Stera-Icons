import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullUpIconDuotone = memo(
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
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m5 15 7-7 7 7"
        />
        <path
          fill="currentColor"
          d="M18.47 15.53c.146.147.338.22.53.22H5a.748.748 0 0 0 .53-.22l1.28-1.28h10.38z"
          opacity={0.4}
        />
      </svg>
    ))
);
ChevronFullUpIconDuotone.displayName = "ChevronFullUpIconDuotone";
export { ChevronFullUpIconDuotone };
