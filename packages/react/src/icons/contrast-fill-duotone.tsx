import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ContrastIconFillDuotone = memo(
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
          d="M23 12c0 6.075-4.925 11-11 11V1c6.075 0 11 4.925 11 11"
        />
        <path
          fill="currentColor"
          d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1z"
          opacity={0.4}
        />
      </svg>
    ))
);
ContrastIconFillDuotone.displayName = "ContrastIconFillDuotone";
export { ContrastIconFillDuotone };
