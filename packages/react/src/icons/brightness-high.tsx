import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrightnessHighIcon = memo(
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
          d="M11.995 18.75a.75.75 0 0 1 .75.75V22a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75M6.163 16.77a.75.75 0 0 1 1.06 1.06l-1.767 1.768a.75.75 0 0 1-1.06-1.06zM16.776 16.77a.75.75 0 0 1 1.06 0l1.77 1.767a.75.75 0 0 1-1.062 1.06l-1.768-1.767a.75.75 0 0 1 0-1.06"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M4.5 11.245a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 11.245a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5zM4.402 4.395a.75.75 0 0 1 1.06 0L7.23 6.163a.75.75 0 0 1-1.06 1.06L4.402 5.457a.75.75 0 0 1 0-1.061M18.537 4.396a.75.75 0 1 1 1.06 1.06L17.83 7.224a.75.75 0 0 1-1.06-1.06zM11.995 1.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
BrightnessHighIcon.displayName = "BrightnessHighIcon";
export { BrightnessHighIcon };
