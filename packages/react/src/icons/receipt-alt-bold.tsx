import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ReceiptAltIconBold = memo(
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
          d="M17 12a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2zM17 8a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.2 3c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052v11.177a.99.99 0 0 1-.577.927l-.041.02c-.15.062-.314.087-.478.071q-.015-.001-.028-.004a1 1 0 0 1-.347-.108l-3.234-1.726-2.63 1.685a1 1 0 0 1-1.079 0L12 19.187l-2.586 1.655a1 1 0 0 1-1.078 0l-2.632-1.685-3.233 1.726-.05.022-.038.019-.063.022-.025.01a1 1 0 0 1-.17.035l-.03.004a1 1 0 0 1-.482-.073l-.02-.009a1 1 0 0 1-.476-.442q-.014-.027-.025-.055l-.016-.033-.01-.03a1 1 0 0 1-.066-.36V8.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C5.298 2.999 5.976 3 6.8 3zM6.8 5c-.856 0-1.439 0-1.889.037-.438.036-.663.101-.82.18a2 2 0 0 0-.873.875c-.08.156-.145.38-.18.82C3 7.361 3 7.942 3 8.8v9.532l2.28-1.215.122-.055a1 1 0 0 1 .887.096l2.586 1.654 2.586-1.654a1 1 0 0 1 1.078 0l2.586 1.654 2.586-1.654a1 1 0 0 1 1.01-.04L21 18.331V8.8c0-.857 0-1.439-.037-1.889-.036-.438-.101-.663-.18-.82a2 2 0 0 0-.875-.873c-.156-.08-.38-.145-.82-.18C18.639 5 18.057 5 17.2 5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ReceiptAltIconBold.displayName = "ReceiptAltIconBold";
export { ReceiptAltIconBold };
