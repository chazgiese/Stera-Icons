import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const QuoteOpeningIconFillDuotone = memo(
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
          d="M18 6a1 1 0 1 1 0 2c-.846 0-1.539.392-2.072 1.313q-.21.363-.381.832c.298-.094.616-.145.953-.145 2.096 0 3.5 1.97 3.5 4s-1.404 4-3.5 4-3.5-1.97-3.5-4c0-2.337.386-4.287 1.197-5.688C15.04 6.858 16.347 6 18 6"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9 6a1 1 0 0 1 0 2c-.846 0-1.539.392-2.072 1.313q-.21.363-.381.832c.298-.094.616-.145.953-.145 2.096 0 3.5 1.97 3.5 4s-1.404 4-3.5 4S4 16.03 4 14c0-2.337.386-4.287 1.197-5.688C6.04 6.858 7.347 6 9 6"
        />
      </svg>
    ))
);
QuoteOpeningIconFillDuotone.displayName = "QuoteOpeningIconFillDuotone";
export { QuoteOpeningIconFillDuotone };
