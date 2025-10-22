import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurveEaseIconBold = memo(
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
          d="M19 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M21 4a1 1 0 1 1 0 2c-4.039 0-6.396 3.004-8.702 6.546-1.105 1.697-2.218 3.547-3.458 4.934C7.58 18.888 6.035 20 4 20q-.045 0-.089-.005l.004.001.034.002.012.001h-.01l-.101-.001h-.341l-.347.001-.114.001h-.044a1 1 0 0 1-.008-2h.044l.115-.001.699-.001.12.001h.034c1.212-.003 2.255-.64 3.34-1.854 1.108-1.237 2.1-2.888 3.274-4.69C12.873 7.995 15.766 4 21 4M10.938 18a1 1 0 1 1 0 2H10.5a1 1 0 0 1 0-2zM14 18a1 1 0 0 1 0 2h-.437a1 1 0 1 1 0-2z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M10.54 4.005a1 1 0 0 1 0 1.99L10.438 6H10a1 1 0 0 1 0-2h.438zM13.603 4.005a1 1 0 0 1 0 1.99L13.5 6h-.437a1 1 0 1 1 0-2h.437z"
        />
      </svg>
    ))
);
CurveEaseIconBold.displayName = "CurveEaseIconBold";
export { CurveEaseIconBold };
