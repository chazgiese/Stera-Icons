import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyDollarIconDuotone = memo(
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
          <path d="M12.75 22a.75.75 0 0 1-1.5 0v-3.25h1.5zM12.75 12.75v4.5h-1.5v-4.5zM12.75 11.25h-1.5v-4.5h1.5zM12 1.25a.75.75 0 0 1 .75.75v3.25h-1.5V2a.75.75 0 0 1 .75-.75" />
        </g>
        <path
          fill="currentColor"
          d="M17 5.25a.75.75 0 0 1 0 1.5h-7a2.25 2.25 0 0 0 0 4.5h5a3.75 3.75 0 1 1 0 7.5H7a.75.75 0 0 1 0-1.5h8a2.25 2.25 0 0 0 0-4.5h-5a3.75 3.75 0 1 1 0-7.5z"
        />
      </svg>
    ))
);
CurrencyDollarIconDuotone.displayName = "CurrencyDollarIconDuotone";
export { CurrencyDollarIconDuotone };
