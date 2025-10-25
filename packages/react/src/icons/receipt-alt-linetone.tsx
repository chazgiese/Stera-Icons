import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ReceiptAltIconLinetone = memo(
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
          d="M17.2 3c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564.045.55.044 1.228.044 2.052V20a1 1 0 0 1-1.47.883l-3.235-1.726-2.63 1.685a1 1 0 0 1-1.08 0L12 19.187l-2.586 1.655a1 1 0 0 1-1.078 0l-2.632-1.685-3.233 1.726A1 1 0 0 1 1 20V8.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C5.298 2.999 5.976 3 6.8 3zM6.8 5c-.857 0-1.439 0-1.889.037-.438.036-.663.101-.82.18a2 2 0 0 0-.873.875c-.08.156-.145.38-.18.82C3 7.361 3 7.942 3 8.8v9.532l2.28-1.215a1 1 0 0 1 1.01.041l2.585 1.654 2.586-1.654.127-.07a1 1 0 0 1 .951.07l2.586 1.654 2.586-1.654.118-.065a1 1 0 0 1 .892.024L21 18.332V8.8c0-.857 0-1.439-.037-1.889-.036-.438-.101-.663-.18-.82a2 2 0 0 0-.875-.873c-.156-.08-.38-.145-.82-.18C18.639 5 18.058 5 17.2 5z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M17 12a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zM17 8a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
ReceiptAltIconLinetone.displayName = "ReceiptAltIconLinetone";
export { ReceiptAltIconLinetone };
