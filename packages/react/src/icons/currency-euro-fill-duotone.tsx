import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyEuroIconFillDuotone = memo(
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
          d="M18 1.5a1.5 1.5 0 0 1 0 3h-2.5c-2.075 0-3.467.506-4.374 1.487C10.193 6.997 9.5 8.8 9.5 12s.693 5.003 1.626 6.013c.907.981 2.299 1.487 4.374 1.487H18a1.5 1.5 0 0 1 0 3h-2.5c-2.527 0-4.885-.62-6.577-2.45C7.257 18.247 6.5 15.55 6.5 12s.757-6.247 2.423-8.05c1.692-1.83 4.05-2.45 6.577-2.45z"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M6.507 12.5q.032 1.626.297 3H4a1.5 1.5 0 0 1 0-3zM16 12.5a1.5 1.5 0 0 1 0 3H9.874c-.207-.814-.339-1.802-.367-3zM6.804 8.5a18 18 0 0 0-.297 3H4a1.5 1.5 0 0 1 0-3zM16 8.5a1.5 1.5 0 0 1 0 3H9.507c.028-1.198.16-2.186.367-3z" />
        </g>
      </svg>
    ))
);
CurrencyEuroIconFillDuotone.displayName = "CurrencyEuroIconFillDuotone";
export { CurrencyEuroIconFillDuotone };
