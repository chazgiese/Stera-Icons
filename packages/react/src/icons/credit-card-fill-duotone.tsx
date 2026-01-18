import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CreditCardIconFillDuotone = memo(
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
          d="M12 15a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM18 15a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM23 10H1V8h22z"
        />
        <g fill="currentColor" opacity={0.4}>
          <path
            fillRule="evenodd"
            d="M23 15.2c0 .824.001 1.502-.044 2.052-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.55.045-1.228.044-2.052.044H6.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C.999 16.702 1 16.024 1 15.2V10h22zM11 15a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm4 0a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
            clipRule="evenodd"
          />
          <path d="M17.2 3c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.748 1.748c.248.485.346 1.002.392 1.564.03.36.037.776.04 1.252H1.004c.003-.476.01-.891.04-1.252.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C5.298 2.999 5.976 3 6.8 3z" />
        </g>
      </svg>
    ))
);
CreditCardIconFillDuotone.displayName = "CreditCardIconFillDuotone";
export { CreditCardIconFillDuotone };
