import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoreIconDuotone = memo(
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
        <circle cx={12} cy={12} r={1.5} fill="currentColor" opacity={0.4} />
        <path
          fill="currentColor"
          d="M21 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        />
      </svg>
    ))
);
MoreIconDuotone.displayName = "MoreIconDuotone";
export { MoreIconDuotone };
