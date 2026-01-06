import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyCircleDollarIconFillDuotone = memo(
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
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m-.25 3.5a1 1 0 0 0-1 1V7a3 3 0 0 0 0 6h3a1 1 0 1 1 0 2h-5a1 1 0 1 0 0 2h2.5v1.5a1 1 0 1 0 2 0V17h.5a3 3 0 1 0 0-6h-3a1 1 0 1 1 0-2h4a1 1 0 1 0 0-2h-2V5.5a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.75 4.5a1 1 0 0 1 1 1V7h2a1 1 0 1 1 0 2h-4a1 1 0 1 0 0 2h3a3 3 0 1 1 0 6h-.5v1.5a1 1 0 1 1-2 0V17h-2.5a1 1 0 1 1 0-2h5a1 1 0 1 0 0-2h-3a3 3 0 1 1 0-6V5.5a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
CurrencyCircleDollarIconFillDuotone.displayName =
  "CurrencyCircleDollarIconFillDuotone";
export { CurrencyCircleDollarIconFillDuotone };
