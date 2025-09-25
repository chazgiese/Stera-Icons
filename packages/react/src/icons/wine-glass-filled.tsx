import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WineGlassFilled = memo(
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
          d="M17.5 1a1 1 0 0 1 .983.817v.003l.002.008.005.027.017.098.06.366A38.69 38.69 0 0 1 19 8a7 7 0 0 1-6.001 6.928V19a2 2 0 0 0 2 2h1q.052 0 .102.005A1 1 0 0 1 16 23H8a1 1 0 1 1 0-2h1a2 2 0 0 0 2-2v-4.073A7 7 0 0 1 5 8a39 39 0 0 1 .434-5.68q.037-.238.06-.367l.016-.098.005-.027.002-.008v-.003l.02-.088A1 1 0 0 1 6.5 1z"
        />
      </svg>
    ))
);
WineGlassFilled.displayName = "WineGlassFilled";
export { WineGlassFilled };
