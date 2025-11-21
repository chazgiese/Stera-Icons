import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SignalZeroIconBold = memo(
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
          d="M3.5 17.125c.76 0 1.375.616 1.375 1.375v1c0 .76-.616 1.375-1.375 1.375h-1c-.76 0-1.375-.616-1.375-1.375v-1c0-.76.616-1.375 1.375-1.375z"
        />
      </svg>
    ))
);
SignalZeroIconBold.displayName = "SignalZeroIconBold";
export { SignalZeroIconBold };
