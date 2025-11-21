import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SignalAltHighIconLinetone = memo(
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
          d="M5.5 15.125c.76 0 1.375.616 1.375 1.375v3c0 .76-.616 1.375-1.375 1.375h-2a1.375 1.375 0 0 1-1.368-1.234l-.007-.141v-3c0-.76.616-1.375 1.375-1.375zM13 9.125c.76 0 1.375.616 1.375 1.375v9c0 .76-.616 1.375-1.375 1.375h-2c-.76 0-1.375-.616-1.375-1.375v-9c0-.76.616-1.375 1.375-1.375zM20.5 3.125c.76 0 1.375.616 1.375 1.375v15c0 .76-.616 1.375-1.375 1.375h-2c-.76 0-1.375-.616-1.375-1.375v-15c0-.76.616-1.375 1.375-1.375z"
        />
      </svg>
    ))
);
SignalAltHighIconLinetone.displayName = "SignalAltHighIconLinetone";
export { SignalAltHighIconLinetone };
