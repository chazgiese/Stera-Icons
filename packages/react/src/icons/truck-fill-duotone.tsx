import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TruckIconFillDuotone = memo(
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
          d="M13 3a3 3 0 0 1 3 3h1.933c.648 0 1.266.28 1.693.769l2.632 3.007A3 3 0 0 1 23 11.752v3.998A2.25 2.25 0 0 1 20.75 18h-.286q.035-.245.036-.5c0-.537-.12-1.045-.337-1.5h.587a.25.25 0 0 0 .25-.25v-3.998c0-.242-.088-.477-.247-.66L18.12 8.086A.25.25 0 0 0 17.933 8H16v6.146A3.5 3.5 0 0 0 13.536 18h-3.072q.035-.245.036-.5a3.5 3.5 0 1 0-6.969.463A3 3 0 0 1 1 15V6a3 3 0 0 1 3-3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M17 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TruckIconFillDuotone.displayName = "TruckIconFillDuotone";
export { TruckIconFillDuotone };
