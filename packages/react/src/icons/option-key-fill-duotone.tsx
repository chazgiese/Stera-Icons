import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const OptionKeyIconFillDuotone = memo(
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
          d="M21 3.5a1.5 1.5 0 0 1 0 3h-6.5a1.5 1.5 0 0 1 0-3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9 3.5a1.5 1.5 0 0 1 1.379.91l5.61 13.09H21a1.5 1.5 0 0 1 0 3h-6a1.5 1.5 0 0 1-1.379-.91L8.011 6.5H3a1.5 1.5 0 1 1 0-3z"
        />
      </svg>
    ))
);
OptionKeyIconFillDuotone.displayName = "OptionKeyIconFillDuotone";
export { OptionKeyIconFillDuotone };
