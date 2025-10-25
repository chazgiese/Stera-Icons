import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyEuroCirlceIconLinetone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15 6a1 1 0 1 1 0 2h-1.5c-1.25 0-2.063.284-2.578.8a2.5 2.5 0 0 0-.48.7H13a1 1 0 1 1 0 2h-2.986a10 10 0 0 0 0 1H13a1 1 0 1 1 0 2h-2.559c.14.293.303.522.48.7.516.516 1.33.8 2.579.8H15a1 1 0 1 1 0 2h-1.5c-1.512 0-2.948-.341-3.993-1.388-.559-.56-.95-1.267-1.194-2.112H7.5a1 1 0 1 1 0-2h.512Q8 12.255 8 12q0-.255.012-.5H7.5a1 1 0 1 1 0-2h.813c.245-.845.635-1.553 1.194-2.112C10.552 6.34 11.988 6 13.5 6z"
        />
      </svg>
    ))
);
CurrencyEuroCirlceIconLinetone.displayName = "CurrencyEuroCirlceIconLinetone";
export { CurrencyEuroCirlceIconLinetone };
