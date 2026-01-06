import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpIconBoldDuotone = memo(
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
          d="M13 7.414V19a1 1 0 1 1-2 0V7.414l1-1z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M4.293 12.707a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L12 6.414l-6.293 6.293a1 1 0 0 1-1.414 0"
        />
      </svg>
    ))
);
ArrowUpIconBoldDuotone.displayName = "ArrowUpIconBoldDuotone";
export { ArrowUpIconBoldDuotone };
