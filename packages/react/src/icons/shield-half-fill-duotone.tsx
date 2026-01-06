import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldHalfIconFillDuotone = memo(
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
          d="M12 22.998a1 1 0 0 1-.447-.104l-1.367-.683A13 13 0 0 1 3 10.584V5a1 1 0 0 1 .648-.937l8-3A1 1 0 0 1 12 1z"
        />
        <path
          fill="currentColor"
          d="M12 1.002q.18-.001.352.061l8 3A1 1 0 0 1 21 5v5.584a13 13 0 0 1-7.187 11.627l-1.366.684A1 1 0 0 1 12 23z"
          opacity={0.4}
        />
      </svg>
    ))
);
ShieldHalfIconFillDuotone.displayName = "ShieldHalfIconFillDuotone";
export { ShieldHalfIconFillDuotone };
