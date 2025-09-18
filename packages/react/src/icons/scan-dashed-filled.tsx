import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScanDashedFilled = memo(
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
          d="M4 15a1.5 1.5 0 0 1 1.5 1.5V18a.5.5 0 0 0 .5.5h1.5a1.5 1.5 0 0 1 0 3H6A3.5 3.5 0 0 1 2.5 18v-1.5A1.5 1.5 0 0 1 4 15M20 15a1.5 1.5 0 0 1 1.5 1.5V18a3.5 3.5 0 0 1-3.5 3.5h-1.5a1.5 1.5 0 0 1 0-3H18a.5.5 0 0 0 .5-.5v-1.5A1.5 1.5 0 0 1 20 15M22.5 10.5a1.5 1.5 0 0 1 0 3h-21a1.5 1.5 0 0 1 0-3zM7.5 2.5a1.5 1.5 0 1 1 0 3H6a.5.5 0 0 0-.5.5v1.5a1.5 1.5 0 1 1-3 0V6A3.5 3.5 0 0 1 6 2.5zM18 2.5A3.5 3.5 0 0 1 21.5 6v1.5a1.5 1.5 0 0 1-3 0V6a.5.5 0 0 0-.5-.5h-1.5a1.5 1.5 0 0 1 0-3z"
        />
      </svg>
    ))
);
ScanDashedFilled.displayName = "ScanDashedFilled";
export { ScanDashedFilled };
