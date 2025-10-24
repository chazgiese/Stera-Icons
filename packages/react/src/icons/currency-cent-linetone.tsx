import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyCentIconLinetone = memo(
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
          d="M9.354 5.191a7.5 7.5 0 0 1 8.318 1.377 1 1 0 0 1-1.38 1.449 5.5 5.5 0 1 0 .42 7.518 1 1 0 0 1 1.533 1.286A7.501 7.501 0 0 1 5.012 12.42 7.5 7.5 0 0 1 9.354 5.19"
        />
      </svg>
    ))
);
CurrencyCentIconLinetone.displayName = "CurrencyCentIconLinetone";
export { CurrencyCentIconLinetone };
