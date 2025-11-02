import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RouteArrowIconFilltone = memo(
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
          d="M13.75 4.5a4.25 4.25 0 0 1 0 8.5h-4.5a2.25 2.25 0 0 0 0 4.5H16v2H9.25a4.25 4.25 0 0 1 0-8.5h4.5a2.25 2.25 0 0 0 0-4.5H8.854a3.5 3.5 0 0 0 0-2z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.617 14.576a1 1 0 0 1 1.09.217l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 16 21.5v-6a1 1 0 0 1 .617-.924M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"
        />
      </svg>
    ))
);
RouteArrowIconFilltone.displayName = "RouteArrowIconFilltone";
export { RouteArrowIconFilltone };
