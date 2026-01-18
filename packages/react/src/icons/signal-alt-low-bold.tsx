import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SignalAltLowIconBold = memo(
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
          d="M5 15.125c1.036 0 1.875.84 1.875 1.875v2c0 1.035-.84 1.875-1.875 1.875H4A1.875 1.875 0 0 1 2.125 19v-2c0-1.036.84-1.875 1.875-1.875z"
        />
      </svg>
    ))
);
SignalAltLowIconBold.displayName = "SignalAltLowIconBold";
export { SignalAltLowIconBold };
