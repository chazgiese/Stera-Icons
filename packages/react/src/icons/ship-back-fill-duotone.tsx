import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShipBackIconFillDuotone = memo(
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
          d="M4 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M19.143 2.837c-.451-.032-.84.135-1.126.283-.292.152-.638.376-1.023.623l-9.441 6.07c-.332.213-.64.41-.873.592-.234.183-.513.438-.673.817a2 2 0 0 0 0 1.556c.16.379.439.634.673.817.233.182.54.379.873.592l9.441 6.07c.385.247.731.47 1.023.623.285.148.675.315 1.125.283a2 2 0 0 0 1.459-.796c.27-.362.34-.78.37-1.1.03-.328.029-.74.029-1.198V5.931c0-.458 0-.87-.03-1.199-.029-.32-.099-.737-.37-1.1a2 2 0 0 0-1.458-.795"
        />
      </svg>
    ))
);
ShipBackIconFillDuotone.displayName = "ShipBackIconFillDuotone";
export { ShipBackIconFillDuotone };
