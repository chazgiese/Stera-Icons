import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BluetoothIconDuotone = memo(
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
          d="M11.657 1.333a.75.75 0 0 1 .778.057l7 5a.75.75 0 0 1 0 1.22L13.29 12l6.146 4.39a.75.75 0 0 1 0 1.22l-7 5A.75.75 0 0 1 11.25 22V2a.75.75 0 0 1 .407-.667m1.093 19.21L17.71 17l-4.96-3.543zm0-10L17.71 7l-4.96-3.543z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M4.39 6.565a.75.75 0 0 1 1.046-.175l5.814 4.152v2.915L5.436 17.61a.75.75 0 0 1-.871-1.22L10.71 12 4.565 7.61a.75.75 0 0 1-.175-1.045"
          opacity={0.4}
        />
      </svg>
    ))
);
BluetoothIconDuotone.displayName = "BluetoothIconDuotone";
export { BluetoothIconDuotone };
