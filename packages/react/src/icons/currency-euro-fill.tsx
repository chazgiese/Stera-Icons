import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyEuroIconFill = memo(
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
          d="M18 1.5a1.5 1.5 0 0 1 0 3h-2.5c-2.075 0-3.467.506-4.374 1.487-.517.56-.96 1.363-1.252 2.513H16a1.5 1.5 0 0 1 0 3H9.507a21 21 0 0 0 0 1H16a1.5 1.5 0 0 1 0 3H9.874c.292 1.15.735 1.953 1.252 2.513.907.981 2.299 1.487 4.374 1.487H18a1.5 1.5 0 0 1 0 3h-2.5c-2.527 0-4.885-.62-6.577-2.45-1.067-1.154-1.758-2.675-2.12-4.55H4a1.5 1.5 0 0 1 0-3h2.507A24 24 0 0 1 6.5 12q0-.253.007-.5H4a1.5 1.5 0 0 1 0-3h2.804c.361-1.875 1.052-3.396 2.119-4.55 1.692-1.83 4.05-2.45 6.577-2.45z"
        />
      </svg>
    ))
);
CurrencyEuroIconFill.displayName = "CurrencyEuroIconFill";
export { CurrencyEuroIconFill };
