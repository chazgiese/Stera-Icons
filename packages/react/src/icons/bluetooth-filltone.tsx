import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BluetoothIconFilltone = memo(
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
          d="M3.78 6.128a1.5 1.5 0 0 1 2.092-.349L10.5 9.085v5.83L5.872 18.22a1.5 1.5 0 0 1-1.744-2.442L9.42 12 4.128 8.222a1.5 1.5 0 0 1-.349-2.093"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.314.666a1.5 1.5 0 0 1 1.558.113l7 5a1.5 1.5 0 0 1 0 2.442L14.582 12l5.29 3.78a1.5 1.5 0 0 1 0 2.44l-7 5A1.5 1.5 0 0 1 10.5 22V2a1.5 1.5 0 0 1 .813-1.334M13.5 19.085 16.419 17 13.5 14.915zm0-10L16.419 7 13.5 4.915z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BluetoothIconFilltone.displayName = "BluetoothIconFilltone";
export { BluetoothIconFilltone };
