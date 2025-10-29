import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyDollarIconFilltone = memo(
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
          <path d="M13.5 22a1.5 1.5 0 0 1-3 0v-2.5h3zM13.5 13.5v3h-3v-3zM13.5 10.5h-3v-3h3zM12 .5A1.5 1.5 0 0 1 13.5 2v2.5h-3V2A1.5 1.5 0 0 1 12 .5" />
        </g>
        <path
          fill="currentColor"
          d="M17 4.5a1.5 1.5 0 0 1 0 3h-7a1.5 1.5 0 1 0 0 3h5a4.5 4.5 0 1 1 0 9H7a1.5 1.5 0 0 1 0-3h8a1.5 1.5 0 0 0 0-3h-5a4.5 4.5 0 1 1 0-9z"
        />
      </svg>
    ))
);
CurrencyDollarIconFilltone.displayName = "CurrencyDollarIconFilltone";
export { CurrencyDollarIconFilltone };
