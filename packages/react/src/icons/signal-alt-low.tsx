import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SignalAltLowIcon = memo(
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
          d="M5 15.5A1.5 1.5 0 0 1 6.5 17v2A1.5 1.5 0 0 1 5 20.5H4A1.5 1.5 0 0 1 2.5 19v-2A1.5 1.5 0 0 1 4 15.5z"
        />
      </svg>
    ))
);
SignalAltLowIcon.displayName = "SignalAltLowIcon";
export { SignalAltLowIcon };
