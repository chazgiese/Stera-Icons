import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const OverlappingCirclesIconDuotone = memo(
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
          fillRule="evenodd"
          d="M15.5 4.75a7.25 7.25 0 1 1 0 14.5 7.25 7.25 0 0 1 0-14.5m0 1.5a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M8.5 4.75c1.27 0 2.462.326 3.5.9a7.3 7.3 0 0 0-1.393 1 5.75 5.75 0 1 0 0 10.698q.635.582 1.393 1.002a7.25 7.25 0 1 1-3.5-13.6M13.392 6.65A7.23 7.23 0 0 1 15.75 12c0 2.118-.91 4.023-2.358 5.349a5.7 5.7 0 0 1-1.392-.79A5.74 5.74 0 0 0 14.25 12 5.74 5.74 0 0 0 12 7.44c.422-.325.89-.591 1.392-.79"
        />
      </svg>
    ))
);
OverlappingCirclesIconDuotone.displayName = "OverlappingCirclesIconDuotone";
export { OverlappingCirclesIconDuotone };
