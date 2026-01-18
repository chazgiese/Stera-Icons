import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BrightnessLowIconDuotone = memo(
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
          <path d="M13 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M18.01 7.404a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.415 1.414M7.404 18.01a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414M19.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M4.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M16.596 18.01a1 1 0 1 1 1.415-1.414 1 1 0 0 1-1.415 1.414M5.99 7.404A1 1 0 1 1 7.404 5.99 1 1 0 0 1 5.99 7.404" />
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
BrightnessLowIconDuotone.displayName = "BrightnessLowIconDuotone";
export { BrightnessLowIconDuotone };
