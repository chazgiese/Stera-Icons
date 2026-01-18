import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AngleIconBoldDuotone = memo(
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
          <path d="M19.429 14.903a1 1 0 0 1 1.197.753l.002.011a1 1 0 1 1-1.95.442l-.002-.008a1 1 0 0 1 .753-1.198M18.18 12.02a1 1 0 0 1 1.335.464l.005.011a1 1 0 0 1-1.802.868l-.004-.008a1 1 0 0 1 .466-1.335M16.318 9.485a1 1 0 0 1 1.406.158l.008.008a1 1 0 0 1-1.564 1.247l-.006-.007a1 1 0 0 1 .156-1.406M13.943 7.427a1 1 0 0 1 1.406-.158l.008.007a1 1 0 1 1-1.248 1.562l-.007-.006a1 1 0 0 1-.159-1.405M11.17 5.947a1 1 0 0 1 1.335-.467l.01.005a1 1 0 0 1-.87 1.801l-.008-.004a1 1 0 0 1-.467-1.335M8.137 5.126a1 1 0 0 1 1.196-.754l.01.002a1 1 0 0 1-.444 1.95l-.008-.002a1 1 0 0 1-.754-1.196" />
        </g>
        <path
          fill="currentColor"
          d="M6 4a1 1 0 0 1 1 1v13h13a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
AngleIconBoldDuotone.displayName = "AngleIconBoldDuotone";
export { AngleIconBoldDuotone };
