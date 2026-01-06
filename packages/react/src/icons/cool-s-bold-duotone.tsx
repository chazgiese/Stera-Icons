import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CoolSIconBoldDuotone = memo(
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
          d="M11.519 1.123c.348-.192.787-.16 1.106.096l5 4c.237.19.375.477.375.78v4a1 1 0 0 1-1 1h-1.586l-2-2H16V6.48l-4-3.199-4 3.2v3.105l4.707 4.707A1 1 0 0 1 13 15v2a1 1 0 1 1-2 0v-1.586l-4.707-4.707A1 1 0 0 1 6 10V6c0-.304.138-.592.375-.781l5-4z"
        />
        <path
          fill="currentColor"
          d="M12 6a1 1 0 0 1 1 1v1.586l4.707 4.707A1 1 0 0 1 18 14v4a1 1 0 0 1-.375.781l-5 4a1 1 0 0 1-1.25 0l-5-4A1 1 0 0 1 6 18v-4a1 1 0 0 1 1-1h1.586l2 2H8v2.519l4 3.2 4-3.2v-3.105l-4.707-4.707A1 1 0 0 1 11 9V7a1 1 0 0 1 1-1"
          opacity={0.4}
        />
      </svg>
    ))
);
CoolSIconBoldDuotone.displayName = "CoolSIconBoldDuotone";
export { CoolSIconBoldDuotone };
