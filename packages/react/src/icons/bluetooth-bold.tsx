import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BluetoothIconBold = memo(
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
          d="M11.542 1.11a1 1 0 0 1 1.04.076l7 5a1 1 0 0 1 0 1.627L13.72 12l5.861 4.186a1 1 0 0 1 0 1.627l-7 5a1 1 0 0 1-1.58-.813v-8.058l-5.42 3.871a1 1 0 1 1-1.162-1.627L10.279 12 4.42 7.813a1 1 0 1 1 1.162-1.627l5.42 3.87V2a1 1 0 0 1 .541-.89M13 20.057 17.28 17 13 13.942zm0-10L17.28 7 13 3.942z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.542 1.11a1 1 0 0 1 1.04.077l7 5a1 1 0 0 1 0 1.627L13.72 12l5.861 4.187a1 1 0 0 1 0 1.627l-7 5a1 1 0 0 1-1.58-.814v-8.057l-5.42 3.87a1 1 0 1 1-1.162-1.626L10.279 12 4.42 7.814a1 1 0 1 1 1.162-1.627l5.42 3.87V2a1 1 0 0 1 .541-.89M13 20.057 17.28 17 13 13.943zm0-10L17.28 7 13 3.943z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BluetoothIconBold.displayName = "BluetoothIconBold";
export { BluetoothIconBold };
