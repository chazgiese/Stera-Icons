import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanBarcodeIconFillDuotone = memo(
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
          <path d="M2 13.5A1.5 1.5 0 0 1 3.5 15v3a.5.5 0 0 0 .5.5h3a1.5 1.5 0 0 1 0 3H4A3.5 3.5 0 0 1 .5 18v-3A1.5 1.5 0 0 1 2 13.5M22 13.5a1.5 1.5 0 0 1 1.5 1.5v3a3.5 3.5 0 0 1-3.5 3.5h-3a1.5 1.5 0 0 1 0-3h3a.5.5 0 0 0 .5-.5v-3a1.5 1.5 0 0 1 1.5-1.5M7 2.5a1.5 1.5 0 1 1 0 3H4a.5.5 0 0 0-.5.5v3a1.5 1.5 0 1 1-3 0V6A3.5 3.5 0 0 1 4 2.5zM20 2.5A3.5 3.5 0 0 1 23.5 6v3a1.5 1.5 0 0 1-3 0V6a.5.5 0 0 0-.5-.5h-3a1.5 1.5 0 0 1 0-3z" />
        </g>
        <path
          fill="currentColor"
          d="M7.5 7.5A1.5 1.5 0 0 1 9 9v6a1.5 1.5 0 0 1-3 0V9a1.5 1.5 0 0 1 1.5-1.5M12 7.5A1.5 1.5 0 0 1 13.5 9v6a1.5 1.5 0 0 1-3 0V9A1.5 1.5 0 0 1 12 7.5M16.5 7.5A1.5 1.5 0 0 1 18 9v6a1.5 1.5 0 0 1-3 0V9a1.5 1.5 0 0 1 1.5-1.5"
        />
      </svg>
    ))
);
ScanBarcodeIconFillDuotone.displayName = "ScanBarcodeIconFillDuotone";
export { ScanBarcodeIconFillDuotone };
