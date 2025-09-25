import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CreditCardFilled = memo(
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
          d="M23 15.2c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.55.045-1.228.044-2.052.044H6.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C.999 16.702 1 16.024 1 15.2V10h22zM6.5 12.5A1.5 1.5 0 0 0 5 14v1.5A1.5 1.5 0 0 0 6.5 17h3a1.5 1.5 0 0 0 1.5-1.5V14a1.5 1.5 0 0 0-1.5-1.5z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M17.2 3c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.03.36.037.776.04 1.252H1.004c.003-.476.01-.891.04-1.252.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C5.298 2.999 5.976 3 6.8 3z"
        />
      </svg>
    ))
);
CreditCardFilled.displayName = "CreditCardFilled";
export { CreditCardFilled };
