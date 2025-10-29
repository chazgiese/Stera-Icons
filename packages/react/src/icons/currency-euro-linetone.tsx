import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyEuroIconLinetone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M6.023 13q.045 1.058.19 2H4a1 1 0 1 1 0-2zM17 13a1 1 0 1 1 0 2H8.236a16 16 0 0 1-.21-2zM6.213 9a19 19 0 0 0-.19 2H4a1 1 0 1 1 0-2zM17 9a1 1 0 1 1 0 2H8.025q.052-1.094.211-2z" />
        </g>
        <path
          fill="currentColor"
          d="M19 1a1 1 0 1 1 0 2h-3c-2.63 0-4.568.597-5.863 1.894C8.84 6.193 8 8.384 8 12s.84 5.807 2.137 7.106C11.43 20.403 13.37 21 16 21h3a1 1 0 1 1 0 2h-3c-2.893 0-5.455-.654-7.28-2.481C6.899 18.693 6 15.884 6 12c0-3.883.898-6.693 2.72-8.519C10.546 1.654 13.108 1 16 1z"
        />
      </svg>
    ))
);
CurrencyEuroIconLinetone.displayName = "CurrencyEuroIconLinetone";
export { CurrencyEuroIconLinetone };
