import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurrencyCentIconBoldDuotone = memo(
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
          <path d="M11 19.347a7.5 7.5 0 0 0 2 .134V22a1 1 0 1 1-2 0zM11 6.708a5.5 5.5 0 0 1 2-.185v10.953c-.67.06-1.348-.001-2-.186zM12 1a1 1 0 0 1 1 1v2.518a7.5 7.5 0 0 0-2 .134V2a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          d="M9.354 5.191a7.5 7.5 0 0 1 8.318 1.377 1 1 0 0 1-1.38 1.449 5.5 5.5 0 1 0 .42 7.518 1 1 0 0 1 1.533 1.286A7.501 7.501 0 0 1 5.012 12.42 7.5 7.5 0 0 1 9.354 5.19"
        />
      </svg>
    ))
);
CurrencyCentIconBoldDuotone.displayName = "CurrencyCentIconBoldDuotone";
export { CurrencyCentIconBoldDuotone };
