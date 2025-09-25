import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyEuro2Bold = memo(
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
          d="M19 1a1 1 0 1 1 0 2h-3c-2.63 0-4.568.597-5.863 1.894-.89.891-1.565 2.202-1.9 4.106H17a1 1 0 1 1 0 2H8.025q-.024.48-.025 1 .001.52.025 1H17a1 1 0 1 1 0 2H8.236c.336 1.904 1.01 3.215 1.9 4.106C11.433 20.403 13.37 21 16 21h3a1 1 0 1 1 0 2h-3c-2.893 0-5.455-.654-7.28-2.481C7.408 19.202 6.577 17.373 6.214 15H4a1 1 0 1 1 0-2h2.023A23 23 0 0 1 6 12q.002-.513.023-1H4a1 1 0 1 1 0-2h2.213c.363-2.373 1.194-4.202 2.508-5.519C10.545 1.654 13.107 1 16 1z"
        />
      </svg>
    ))
);
CurrencyEuro2Bold.displayName = "CurrencyEuro2Bold";
export { CurrencyEuro2Bold };
