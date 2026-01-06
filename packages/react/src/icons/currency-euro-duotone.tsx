import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyEuroIconDuotone = memo(
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
          <path d="M7.285 13.25q.046.789.152 1.5H4a.75.75 0 0 1 0-1.5zM16 13.25a.75.75 0 0 1 0 1.5H8.952a15 15 0 0 1-.164-1.5zM7.437 9.25q-.106.711-.152 1.5H4a.75.75 0 0 1 0-1.5zM16 9.25a.75.75 0 0 1 0 1.5H8.788q.05-.808.164-1.5z" />
        </g>
        <path
          fill="currentColor"
          d="M18 2.25a.75.75 0 0 1 0 1.5h-2.5c-2.188 0-3.821.534-4.925 1.728C9.46 6.685 8.75 8.712 8.75 12c0 3.287.709 5.314 1.825 6.523 1.104 1.193 2.737 1.727 4.925 1.727H18a.75.75 0 0 1 0 1.5h-2.5c-2.414 0-4.53-.591-6.026-2.21C7.99 17.936 7.25 15.463 7.25 12s.74-5.935 2.224-7.54c1.495-1.619 3.612-2.21 6.026-2.21z"
        />
      </svg>
    ))
);
CurrencyEuroIconDuotone.displayName = "CurrencyEuroIconDuotone";
export { CurrencyEuroIconDuotone };
