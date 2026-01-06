import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LabelIconDuotone = memo(
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
          d="M18 3.25A4.75 4.75 0 0 1 22.75 8v8A4.75 4.75 0 0 1 18 20.75H9a.75.75 0 0 0 0-1.5h9A3.25 3.25 0 0 0 21.25 16V8A3.25 3.25 0 0 0 18 4.75H9a.75.75 0 0 0 0-1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9 3.25a.75.75 0 0 1 0 1.5h-.783a3.25 3.25 0 0 0-2.756 1.527L2.3 11.337a1.25 1.25 0 0 0 0 1.325l3.162 5.06a3.25 3.25 0 0 0 2.756 1.528H9a.75.75 0 0 1 0 1.5h-.783a4.75 4.75 0 0 1-4.027-2.232l-3.163-5.061a2.75 2.75 0 0 1 0-2.914l3.163-5.06A4.75 4.75 0 0 1 8.217 3.25z"
        />
      </svg>
    ))
);
LabelIconDuotone.displayName = "LabelIconDuotone";
export { LabelIconDuotone };
