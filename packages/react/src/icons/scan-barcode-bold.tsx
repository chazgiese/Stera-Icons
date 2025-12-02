import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanBarcodeIconBold = memo(
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
          d="M2 14a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1M22 14a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3h-3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          d="M6 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M10 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M14 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M18 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          d="M7 3a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0V6a3 3 0 0 1 3-3zM20 3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-3a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ScanBarcodeIconBold.displayName = "ScanBarcodeIconBold";
export { ScanBarcodeIconBold };
