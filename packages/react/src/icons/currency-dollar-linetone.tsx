import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyDollarIconLinetone = memo(
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
          d="M12 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M17 5a1 1 0 1 1 0 2h-7a2 2 0 1 0 0 4h5a4 4 0 0 1 0 8H7a1 1 0 1 1 0-2h8a2 2 0 1 0 0-4h-5a4 4 0 0 1 0-8z"
        />
      </svg>
    ))
);
CurrencyDollarIconLinetone.displayName = "CurrencyDollarIconLinetone";
export { CurrencyDollarIconLinetone };
