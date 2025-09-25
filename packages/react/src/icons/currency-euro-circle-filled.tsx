import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyEuroCircleFilled = memo(
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
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m1.5 5c-1.512 0-2.948.341-3.993 1.388-.613.614-1.024 1.406-1.26 2.362H7.5a.75.75 0 0 0 0 1.5h.523a12 12 0 0 0 0 1.5H7.5a.75.75 0 0 0 0 1.5h.747c.236.956.647 1.748 1.26 2.362C10.552 17.66 11.988 18 13.5 18H15a1 1 0 1 0 0-2h-1.5c-1.25 0-2.063-.284-2.578-.8a2.64 2.64 0 0 1-.588-.95H13a.75.75 0 0 0 0-1.5h-2.97a9.6 9.6 0 0 1 0-1.5H13a.75.75 0 0 0 0-1.5h-2.666c.159-.418.363-.724.588-.95.515-.516 1.329-.8 2.578-.8H15a1 1 0 1 0 0-2z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CurrencyEuroCircleFilled.displayName = "CurrencyEuroCircleFilled";
export { CurrencyEuroCircleFilled };
