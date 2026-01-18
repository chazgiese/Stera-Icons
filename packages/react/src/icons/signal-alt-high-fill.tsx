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
          d="M5 14.75A2.25 2.25 0 0 1 7.25 17v2A2.25 2.25 0 0 1 5 21.25H4A2.25 2.25 0 0 1 1.75 19v-2A2.25 2.25 0 0 1 4 14.75zM12.5 8.75A2.25 2.25 0 0 1 14.75 11v8a2.25 2.25 0 0 1-2.25 2.25h-1A2.25 2.25 0 0 1 9.25 19v-8a2.25 2.25 0 0 1 2.25-2.25zM20 2.75A2.25 2.25 0 0 1 22.25 5v14A2.25 2.25 0 0 1 20 21.25h-1A2.25 2.25 0 0 1 16.75 19V5A2.25 2.25 0 0 1 19 2.75z"
        />
      </svg>
    ))
);
SignalAltHighIconFill.displayName = "SignalAltHighIconFill";
export { SignalAltHighIconFill };
