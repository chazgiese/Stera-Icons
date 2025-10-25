import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanBarcodeIconFilltone = memo(
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
          <path d="M2 14a1 1 0 0 1 .995.898L3 15v2a2 2 0 0 0 2 2h2l.103.005a1 1 0 0 1 0 1.99L7 21H5a4 4 0 0 1-4-4v-2l.005-.102A1 1 0 0 1 2 14M22 14a1 1 0 0 1 .995.898L23 15v2a4 4 0 0 1-4 4h-2l-.102-.005a1 1 0 0 1 0-1.99L17 19h2a2 2 0 0 0 2-2v-2l.005-.102A1 1 0 0 1 22 14M7.103 3.005a1 1 0 0 1 0 1.99L7 5H5a2 2 0 0 0-2 2v2l-.005.103a1 1 0 0 1-1.99 0L1 9V7a4 4 0 0 1 4-4h2zM19 3a4 4 0 0 1 4 4v2l-.005.103a1 1 0 0 1-1.99 0L21 9V7a2 2 0 0 0-2-2h-2l-.102-.005a1 1 0 0 1 0-1.99L17 3z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18 6.5A1.5 1.5 0 0 1 19.5 8v8a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 16V8A1.5 1.5 0 0 1 6 6.5zM8 9a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScanBarcodeIconFilltone.displayName = "ScanBarcodeIconFilltone";
export { ScanBarcodeIconFilltone };
