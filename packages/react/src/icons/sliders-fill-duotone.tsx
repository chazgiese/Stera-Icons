import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SlidersIconFillDuotone = memo(
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
          <path d="M11.126 16a4 4 0 0 0 0 2H2a1 1 0 1 1 0-2zM22 16a1 1 0 1 1 0 2h-3.126a4 4 0 0 0 0-2zM5.126 6a4 4 0 0 0 0 2H2a1 1 0 0 1 0-2zM22 6a1 1 0 1 1 0 2h-9.126a4 4 0 0 0 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M15 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8"
        />
      </svg>
    ))
);
SlidersIconFillDuotone.displayName = "SlidersIconFillDuotone";
export { SlidersIconFillDuotone };
