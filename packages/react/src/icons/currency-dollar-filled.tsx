import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyDollarFilled = memo(
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
          d="M12 .5A1.5 1.5 0 0 1 13.5 2v2.5H17a1.5 1.5 0 0 1 0 3h-3.5v3H15a4.5 4.5 0 1 1 0 9h-1.5V22a1.5 1.5 0 0 1-3 0v-2.5H7a1.5 1.5 0 0 1 0-3h3.5v-3H10a4.5 4.5 0 1 1 0-9h.5V2A1.5 1.5 0 0 1 12 .5m1.5 16H15a1.5 1.5 0 0 0 0-3h-1.5zm-3.5-9a1.5 1.5 0 1 0 0 3h.5v-3z"
        />
      </svg>
    ))
);
CurrencyDollarFilled.displayName = "CurrencyDollarFilled";
export { CurrencyDollarFilled };
