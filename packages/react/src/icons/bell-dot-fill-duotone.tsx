import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BellDotIconFillDuotone = memo(
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
          d="M12 1.5a8.5 8.5 0 0 1 2.398.345 5.5 5.5 0 0 0 6.102 9.054v.993c0 .634.173 1.257.499 1.8l1.066 1.779c.8 1.333-.16 3.029-1.714 3.029h-3.375a5 5 0 0 1-9.952 0H3.65c-1.554 0-2.514-1.696-1.714-3.03L3 13.693a3.5 3.5 0 0 0 .499-1.8V10A8.5 8.5 0 0 1 12 1.5m-2.958 17a3 3 0 0 0 5.916 0z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path fill="currentColor" d="M18 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
      </svg>
    ))
);
BellDotIconFillDuotone.displayName = "BellDotIconFillDuotone";
export { BellDotIconFillDuotone };
