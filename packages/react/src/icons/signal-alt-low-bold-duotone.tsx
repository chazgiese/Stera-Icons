import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SignalAltLowIconBoldDuotone = memo(
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
          <path d="M12.5 9.125c1.036 0 1.875.84 1.875 1.875v8c0 1.035-.84 1.875-1.875 1.875h-1A1.875 1.875 0 0 1 9.625 19v-8c0-1.036.84-1.875 1.875-1.875zM20 3.125c1.035 0 1.875.84 1.875 1.875v14c0 1.035-.84 1.875-1.875 1.875h-1A1.875 1.875 0 0 1 17.125 19V5c0-1.036.84-1.875 1.875-1.875z" />
        </g>
        <path
          fill="currentColor"
          d="M5 15.125c1.036 0 1.875.84 1.875 1.875v2c0 1.035-.84 1.875-1.875 1.875H4A1.875 1.875 0 0 1 2.125 19v-2c0-1.036.84-1.875 1.875-1.875z"
        />
      </svg>
    ))
);
SignalAltLowIconBoldDuotone.displayName = "SignalAltLowIconBoldDuotone";
export { SignalAltLowIconBoldDuotone };
