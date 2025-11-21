import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SignalHighIconFilltone = memo(
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
          d="M3.5 16.75c.966 0 1.75.784 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 .75 19.5v-1c0-.966.784-1.75 1.75-1.75zM9.5 12.08c.966 0 1.75.784 1.75 1.75v5.67a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-5.67c0-.966.784-1.75 1.75-1.75zM15.5 7.414c.966 0 1.75.784 1.75 1.75V19.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75V9.164c0-.966.784-1.75 1.75-1.75zM21.5 2.75c.966 0 1.75.784 1.75 1.75v15a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-15c0-.966.784-1.75 1.75-1.75z"
        />
      </svg>
    ))
);
SignalHighIconFilltone.displayName = "SignalHighIconFilltone";
export { SignalHighIconFilltone };
