import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanBarcodeIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M2 14.25a.75.75 0 0 1 .75.75v3c0 .69.56 1.25 1.25 1.25h3a.75.75 0 0 1 0 1.5H4A2.75 2.75 0 0 1 1.25 18v-3a.75.75 0 0 1 .75-.75M22 14.25a.75.75 0 0 1 .75.75v3A2.75 2.75 0 0 1 20 20.75h-3a.75.75 0 0 1 0-1.5h3c.69 0 1.25-.56 1.25-1.25v-3a.75.75 0 0 1 .75-.75M7 3.25a.75.75 0 0 1 0 1.5H4c-.69 0-1.25.56-1.25 1.25v3a.75.75 0 0 1-1.5 0V6A2.75 2.75 0 0 1 4 3.25zM20 3.25A2.75 2.75 0 0 1 22.75 6v3a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25h-3a.75.75 0 0 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          d="M6 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 6 7.25M10 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M14 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M18 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
ScanBarcodeIconDuotone.displayName = "ScanBarcodeIconDuotone";
export { ScanBarcodeIconDuotone };
