import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyDollarIconBoldDuotone = memo(
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
          <path d="M13 22a1 1 0 1 1-2 0v-3h2zM13 13v4h-2v-4zM13 11h-2V7h2zM12 1a1 1 0 0 1 1 1v3h-2V2a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          d="M17 5a1 1 0 1 1 0 2h-7a2 2 0 1 0 0 4h5a4 4 0 0 1 0 8H7a1 1 0 1 1 0-2h8a2 2 0 1 0 0-4h-5a4 4 0 0 1 0-8z"
        />
      </svg>
    ))
);
CurrencyDollarIconBoldDuotone.displayName = "CurrencyDollarIconBoldDuotone";
export { CurrencyDollarIconBoldDuotone };
