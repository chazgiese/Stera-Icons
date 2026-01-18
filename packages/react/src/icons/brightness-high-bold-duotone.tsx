import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrightnessHighIconBoldDuotone = memo(
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
          <path d="M11.995 18.5a1 1 0 0 1 1 1V22a1 1 0 0 1-2 0v-2.5a1 1 0 0 1 1-1M5.986 16.593A1 1 0 1 1 7.4 18.007l-1.767 1.767a1 1 0 0 1-1.414-1.414zM16.6 16.593a1 1 0 0 1 1.414 0l1.768 1.767a1 1 0 0 1-1.415 1.414L16.6 18.007a1 1 0 0 1 0-1.414M4.5 10.995a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2zM22 10.995a1 1 0 1 1 0 2h-2.5a1 1 0 0 1 0-2zM4.226 4.218a1 1 0 0 1 1.414 0l1.767 1.768A1 1 0 1 1 5.993 7.4L4.226 5.633a1 1 0 0 1 0-1.415M18.36 4.219a1 1 0 1 1 1.414 1.414L18.007 7.4a1 1 0 0 1-1.414-1.414zM11.995 1a1 1 0 0 1 1 1v2.5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BrightnessHighIconBoldDuotone.displayName = "BrightnessHighIconBoldDuotone";
export { BrightnessHighIconBoldDuotone };
