import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FigmaIconFillDuotone = memo(
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
          <path d="M12.002 2h3.333a3.333 3.333 0 0 1 0 6.667h-3.333zM5.334 12a3.333 3.333 0 0 1 3.333-3.333h3.334v6.666H8.667A3.333 3.333 0 0 1 5.334 12" />
        </g>
        <path
          fill="currentColor"
          d="M5.334 5.333A3.333 3.333 0 0 1 8.667 2h3.334v6.667H8.667a3.333 3.333 0 0 1-3.333-3.334M12.002 12a3.333 3.333 0 1 1 6.667 0 3.333 3.333 0 0 1-6.667 0M5.334 18.667a3.333 3.333 0 0 1 3.333-3.334h3.334v3.334a3.333 3.333 0 1 1-6.667 0"
        />
      </svg>
    ))
);
FigmaIconFillDuotone.displayName = "FigmaIconFillDuotone";
export { FigmaIconFillDuotone };
