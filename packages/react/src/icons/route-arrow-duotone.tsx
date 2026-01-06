import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RouteArrowIconDuotone = memo(
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
          d="M13.75 4.75a4 4 0 0 1 0 8h-4.5a2.5 2.5 0 0 0 0 5h8.94l.75.75-.75.75H9.25a4 4 0 0 1 0-8h4.5a2.5 2.5 0 0 0 0-5H8.662a3.26 3.26 0 0 0 0-1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.47 14.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l2.47-2.47-2.47-2.47a.75.75 0 0 1 0-1.06"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5.5 2.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
RouteArrowIconDuotone.displayName = "RouteArrowIconDuotone";
export { RouteArrowIconDuotone };
