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
          d="M5.5 15.125c.76 0 1.375.616 1.375 1.375v3c0 .76-.616 1.375-1.375 1.375h-2a1.375 1.375 0 0 1-1.368-1.234l-.007-.141v-3c0-.76.616-1.375 1.375-1.375z"
        />
      </svg>
    ))
);
SignalAltLowIconBold.displayName = "SignalAltLowIconBold";
export { SignalAltLowIconBold };
