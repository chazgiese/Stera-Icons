import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BluetoothFilled = memo(
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
          d="M11.313.666a1.5 1.5 0 0 1 1.559.113l7 5a1.5 1.5 0 0 1 0 2.442L14.58 12l5.29 3.78a1.5 1.5 0 0 1 0 2.44l-7 5A1.5 1.5 0 0 1 10.5 22v-7.085L5.872 18.22a1.5 1.5 0 0 1-1.744-2.442L9.418 12l-5.29-3.778a1.5 1.5 0 0 1 1.744-2.442L10.5 9.085V2a1.5 1.5 0 0 1 .813-1.334M13.5 19.085 16.419 17l-2.92-2.085zm0-10L16.419 7l-2.92-2.085z"
        />
      </svg>
    ))
);
BluetoothFilled.displayName = "BluetoothFilled";
export { BluetoothFilled };
