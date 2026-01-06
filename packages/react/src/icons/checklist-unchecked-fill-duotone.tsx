import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChecklistUncheckedIconFillDuotone = memo(
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
          <path d="M22 16a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2zM22 6a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2z" />
        </g>
        <path
          fill="currentColor"
          d="M5 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8M5 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8"
        />
      </svg>
    ))
);
ChecklistUncheckedIconFillDuotone.displayName =
  "ChecklistUncheckedIconFillDuotone";
export { ChecklistUncheckedIconFillDuotone };
