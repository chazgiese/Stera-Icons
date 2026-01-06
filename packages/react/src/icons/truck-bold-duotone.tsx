import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TruckIconBoldDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M13 3a3 3 0 0 1 3 3h1.933c.648 0 1.266.28 1.693.769l2.632 3.007A3 3 0 0 1 23 11.752v3.998A2.25 2.25 0 0 1 20.75 18h-.286q.035-.245.036-.5c0-.537-.12-1.045-.337-1.5h.587a.25.25 0 0 0 .25-.25v-3.998c0-.242-.088-.477-.247-.66L18.12 8.086A.25.25 0 0 0 17.933 8H16v6.146a3.5 3.5 0 0 0-2 1.551V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9c0 .499.365.91.843.986a3.5 3.5 0 0 0-.312 1.977A3 3 0 0 1 1 15V6a3 3 0 0 1 3-3z" />
          <path d="M13.837 16a3.5 3.5 0 0 0-.3 2h-3.073q.035-.245.036-.5c0-.537-.12-1.045-.337-1.5z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M17 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TruckIconBoldDuotone.displayName = "TruckIconBoldDuotone";
export { TruckIconBoldDuotone };
