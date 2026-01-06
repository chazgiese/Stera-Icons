import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LabelAltIconFill = memo(
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
          d="M20.745 3c1.767 0 2.844 1.944 1.907 3.442l-3.141 5.028a1 1 0 0 0 0 1.06l3.142 5.028c.936 1.498-.14 3.442-1.908 3.442H7.11a3 3 0 0 1-2.544-1.41l-3.75-6a3 3 0 0 1 0-3.18l3.75-6A3 3 0 0 1 7.109 3z"
        />
      </svg>
    ))
);
LabelAltIconFill.displayName = "LabelAltIconFill";
export { LabelAltIconFill };
