import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SlidersIconDuotone = memo(
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
          <path d="M11.325 16.25a3.8 3.8 0 0 0 0 1.5H2a.75.75 0 0 1 0-1.5zM22 16.25a.75.75 0 0 1 0 1.5h-3.325a3.8 3.8 0 0 0 0-1.5zM5.325 6.25a3.8 3.8 0 0 0 0 1.5H2a.75.75 0 0 1 0-1.5zM22 6.25a.75.75 0 0 1 0 1.5h-9.325a3.8 3.8 0 0 0 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15 13.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M9 3.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SlidersIconDuotone.displayName = "SlidersIconDuotone";
export { SlidersIconDuotone };
