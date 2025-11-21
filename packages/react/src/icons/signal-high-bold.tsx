import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SignalHighIconBold = memo(
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
          d="M3.5 17.125c.76 0 1.375.616 1.375 1.375v1c0 .76-.616 1.375-1.375 1.375h-1c-.76 0-1.375-.616-1.375-1.375v-1c0-.76.616-1.375 1.375-1.375zM9.5 12.455c.76 0 1.375.616 1.375 1.375v5.67c0 .76-.616 1.375-1.375 1.375h-1c-.76 0-1.375-.616-1.375-1.375v-5.67c0-.76.616-1.375 1.375-1.375zM15.5 7.79c.76 0 1.375.615 1.375 1.374V19.5c0 .76-.616 1.375-1.375 1.375h-1c-.76 0-1.375-.616-1.375-1.375V9.164c0-.76.616-1.375 1.375-1.375zM21.5 3.125c.76 0 1.375.616 1.375 1.375v15c0 .76-.616 1.375-1.375 1.375h-1c-.76 0-1.375-.616-1.375-1.375v-15c0-.76.616-1.375 1.375-1.375z"
        />
      </svg>
    ))
);
SignalHighIconBold.displayName = "SignalHighIconBold";
export { SignalHighIconBold };
