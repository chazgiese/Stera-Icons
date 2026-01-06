import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SignalAltHighIconFill = memo(
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
          d="M5.5 14.75c.966 0 1.75.784 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-2a1.75 1.75 0 0 1-1.75-1.75v-3c0-.966.784-1.75 1.75-1.75zM13 8.75c.966 0 1.75.784 1.75 1.75v9A1.75 1.75 0 0 1 13 21.25h-2a1.75 1.75 0 0 1-1.75-1.75v-9c0-.966.784-1.75 1.75-1.75zM20.5 2.75c.966 0 1.75.784 1.75 1.75v15a1.75 1.75 0 0 1-1.75 1.75h-2a1.75 1.75 0 0 1-1.75-1.75v-15c0-.966.784-1.75 1.75-1.75z"
        />
      </svg>
    ))
);
SignalAltHighIconFill.displayName = "SignalAltHighIconFill";
export { SignalAltHighIconFill };
