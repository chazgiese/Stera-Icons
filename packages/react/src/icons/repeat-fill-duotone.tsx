import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RepeatIconFillDuotone = memo(
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
          d="M18.617 2.076a1 1 0 0 1 1.09.217l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 18 9V7H7a4 4 0 0 0-4 4v1.5a1 1 0 0 1-2 0V11a6 6 0 0 1 6-6h11V3a1 1 0 0 1 .617-.924"
        />
        <path
          fill="currentColor"
          d="M22 10.5a1 1 0 0 1 1 1V13a6 6 0 0 1-6 6H6v2a1 1 0 0 1-1.707.707l-3-3a1 1 0 0 1 0-1.414l3-3A1 1 0 0 1 6 15v2h11a4 4 0 0 0 4-4v-1.5a1 1 0 0 1 1-1"
          opacity={0.4}
        />
      </svg>
    ))
);
RepeatIconFillDuotone.displayName = "RepeatIconFillDuotone";
export { RepeatIconFillDuotone };
