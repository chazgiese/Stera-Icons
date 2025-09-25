import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WineGlassBold = memo(
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
          d="M17.562 1.003q.025 0 .05.003a1 1 0 0 1 .173.035l.015.005.031.01a1 1 0 0 1 .194.094l.039.024q.138.095.24.233l.027.037a1 1 0 0 1 .125.264q.016.054.027.11v.002l.002.008.005.027.017.098.06.366A38.69 38.69 0 0 1 19 8a7 7 0 0 1-6.001 6.928V19a2 2 0 0 0 2 2h1q.052 0 .102.005A1 1 0 0 1 16 23H8a1 1 0 1 1 0-2h1a2 2 0 0 0 2-2v-4.073A7 7 0 0 1 5 8a39 39 0 0 1 .434-5.68q.037-.238.06-.367l.016-.098.005-.027.002-.008v-.003a1 1 0 0 1 .151-.373l.027-.037a1 1 0 0 1 .693-.401q.024-.002.05-.003L6.48 1h11.04q.021 0 .041.003M7.354 3A36.68 36.68 0 0 0 7 8a5 5 0 0 0 10 0 37 37 0 0 0-.355-5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
WineGlassBold.displayName = "WineGlassBold";
export { WineGlassBold };
