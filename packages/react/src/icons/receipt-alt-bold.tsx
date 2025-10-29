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
          d="M17.2 3c.823 0 1.501-.001 2.052.044.562.046 1.079.144 1.564.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564C23 7.298 23 7.976 23 8.8v11.177a.99.99 0 0 1-.578.927l-.04.02c-.15.062-.314.087-.478.071q-.015-.001-.029-.004a1 1 0 0 1-.346-.108l-3.235-1.726-2.63 1.685a1 1 0 0 1-1.078 0l-2.587-1.655-2.585 1.655a1 1 0 0 1-1.079 0l-2.631-1.685-3.234 1.726-.049.022-.039.019-.062.022-.026.01a1 1 0 0 1-.17.035l-.029.004a1 1 0 0 1-.482-.073l-.02-.009a1 1 0 0 1-.476-.442q-.014-.027-.026-.055l-.015-.033-.011-.03a1 1 0 0 1-.065-.36V8.8c0-.824-.001-1.502.043-2.052.046-.562.145-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.003-.346 1.565-.392C5.298 2.999 5.976 3 6.799 3zM6.8 5c-.857 0-1.44 0-1.89.037-.438.036-.662.101-.819.18a2 2 0 0 0-.874.875c-.08.156-.145.38-.18.82C3 7.361 3 7.942 3 8.8v9.532l2.279-1.215.123-.055a1 1 0 0 1 .887.096l2.586 1.654 2.585-1.654a1 1 0 0 1 1.079 0l2.585 1.654 2.586-1.654a1 1 0 0 1 1.01-.04L21 18.331V8.8c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.82a2 2 0 0 0-.874-.873c-.157-.08-.381-.145-.82-.18C18.638 5 18.056 5 17.2 5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ReceiptAltIconBold.displayName = "ReceiptAltIconBold";
export { ReceiptAltIconBold };
