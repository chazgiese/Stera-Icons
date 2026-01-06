import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyEuroIcon = memo(
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
          d="M18 2.25a.75.75 0 0 1 0 1.5h-2.5c-2.188 0-3.821.534-4.925 1.728-.764.826-1.337 2.037-1.623 3.772H16a.75.75 0 0 1 0 1.5H8.788a20 20 0 0 0 0 2.5H16a.75.75 0 0 1 0 1.5H8.952c.286 1.735.86 2.946 1.623 3.773 1.104 1.193 2.737 1.727 4.925 1.727H18a.75.75 0 0 1 0 1.5h-2.5c-2.414 0-4.53-.591-6.026-2.21-1.056-1.142-1.733-2.724-2.037-4.79H4a.75.75 0 0 1 0-1.5h3.285a22 22 0 0 1 0-2.5H4a.75.75 0 0 1 0-1.5h3.437c.304-2.066.981-3.648 2.037-4.79 1.495-1.619 3.612-2.21 6.026-2.21z"
        />
      </svg>
    ))
);
CurrencyEuroIcon.displayName = "CurrencyEuroIcon";
export { CurrencyEuroIcon };
