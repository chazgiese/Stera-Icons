import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RouteArrowIconFill = memo(
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
          d="M5.5 2a3.5 3.5 0 0 1 3.354 2.5h4.896a4.25 4.25 0 0 1 0 8.5h-4.5a2.25 2.25 0 0 0 0 4.5H16v-2a1 1 0 0 1 1.707-.707l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 16 21.5v-2H9.25a4.25 4.25 0 0 1 0-8.5h4.5a2.25 2.25 0 0 0 0-4.5H8.854A3.501 3.501 0 1 1 5.5 2"
        />
      </svg>
    ))
);
RouteArrowIconFill.displayName = "RouteArrowIconFill";
export { RouteArrowIconFill };
