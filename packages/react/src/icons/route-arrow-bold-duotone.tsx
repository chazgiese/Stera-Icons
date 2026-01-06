import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RouteArrowIconBoldDuotone = memo(
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
          d="M13.75 4.5a4.25 4.25 0 0 1 0 8.5h-4.5a2.25 2.25 0 0 0 0 4.5h8.336l1 1-1 1H9.25a4.25 4.25 0 0 1 0-8.5h4.5a2.25 2.25 0 0 0 0-4.5H8.854a3.5 3.5 0 0 0 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.293 14.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 0 1 0-1.414"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RouteArrowIconBoldDuotone.displayName = "RouteArrowIconBoldDuotone";
export { RouteArrowIconBoldDuotone };
