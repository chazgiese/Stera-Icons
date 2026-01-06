import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyCentIconDuotone = memo(
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
          <path d="M11.25 19.14q.745.13 1.5.104V22a.75.75 0 0 1-1.5 0zM11.25 6.388c.491-.11.996-.154 1.5-.132v11.487a5.8 5.8 0 0 1-1.5-.132zM12 1.25a.75.75 0 0 1 .75.75v2.755a7.3 7.3 0 0 0-1.5.103V2a.75.75 0 0 1 .75-.75" />
        </g>
        <path
          fill="currentColor"
          d="M9.46 5.42a7.25 7.25 0 0 1 8.04 1.33.751.751 0 0 1-1.035 1.086 5.752 5.752 0 0 0-8.893 1.202 5.75 5.75 0 0 0 .36 6.454 5.75 5.75 0 0 0 6.134 2.041 5.75 5.75 0 0 0 2.839-1.836.75.75 0 0 1 1.15.963 7.25 7.25 0 0 1-7.843 2.22 7.25 7.25 0 0 1-4.95-6.475A7.25 7.25 0 0 1 9.46 5.419"
        />
      </svg>
    ))
);
CurrencyCentIconDuotone.displayName = "CurrencyCentIconDuotone";
export { CurrencyCentIconDuotone };
