import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const OptionKeyIconBoldDuotone = memo(
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
          d="M21 4a1 1 0 0 1 0 2h-6.5a1 1 0 1 1 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.147 4.01a1 1 0 0 1 .772.596L15.659 18H21a1 1 0 1 1 0 2h-6a1 1 0 0 1-.919-.606L8.341 6H3a1 1 0 0 1 0-2h6z"
        />
      </svg>
    ))
);
OptionKeyIconBoldDuotone.displayName = "OptionKeyIconBoldDuotone";
export { OptionKeyIconBoldDuotone };
