import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SignalLowIconBoldDuotone = memo(
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
          d="M3.5 17A1.5 1.5 0 0 1 5 18.5v1A1.5 1.5 0 0 1 3.5 21h-1A1.5 1.5 0 0 1 1 19.5v-1A1.5 1.5 0 0 1 2.5 17zM9.5 12.33a1.5 1.5 0 0 1 1.5 1.5v5.67A1.5 1.5 0 0 1 9.5 21h-1A1.5 1.5 0 0 1 7 19.5v-5.67a1.5 1.5 0 0 1 1.5-1.5z"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M21.5 3A1.5 1.5 0 0 1 23 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 20.5 3zM15.5 7.664a1.5 1.5 0 0 1 1.5 1.5V19.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V9.164a1.5 1.5 0 0 1 1.5-1.5z" />
        </g>
      </svg>
    ))
);
SignalLowIconBoldDuotone.displayName = "SignalLowIconBoldDuotone";
export { SignalLowIconBoldDuotone };
