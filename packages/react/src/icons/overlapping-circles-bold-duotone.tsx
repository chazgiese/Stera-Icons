import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const OverlappingCirclesIconBoldDuotone = memo(
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
          d="M8.5 4.5A7.5 7.5 0 1 0 12 18.635a7.5 7.5 0 0 1-1.856-1.385 5.5 5.5 0 1 1 0-10.5A7.5 7.5 0 0 1 12 5.365 7.47 7.47 0 0 0 8.5 4.5M12 16.243A5.49 5.49 0 0 0 14 12a5.49 5.49 0 0 0-2-4.243 5.5 5.5 0 0 1 1.856-1.007A7.48 7.48 0 0 1 16 12a7.48 7.48 0 0 1-2.144 5.25A5.5 5.5 0 0 1 12 16.243"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.5 4.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15m0 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
OverlappingCirclesIconBoldDuotone.displayName =
  "OverlappingCirclesIconBoldDuotone";
export { OverlappingCirclesIconBoldDuotone };
