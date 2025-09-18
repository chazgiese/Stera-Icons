import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BluetoothBold = memo(
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
          d="M11.542 1.11a1 1 0 0 1 1.04.076l7 5a1 1 0 0 1 0 1.627L13.72 12l5.861 4.186a1 1 0 0 1 0 1.627l-7 5A1 1 0 0 1 11 22v-8.058l-5.419 3.871a1 1 0 1 1-1.162-1.627L10.279 12 4.42 7.813A1 1 0 1 1 5.58 6.186L11 10.056V2c0-.375.21-.718.542-.89M13 20.057 17.28 17 13 13.942zm0-10L17.28 7 13 3.942z"
        />
      </svg>
    ))
);
BluetoothBold.displayName = "BluetoothBold";
export { BluetoothBold };
