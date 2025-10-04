import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Star = memo(
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
          d="M10.79 2.044c.444-1.026 1.87-1.058 2.374-.096l.046.096 2.37 5.484 5.973.552c1.147.106 1.62 1.534.747 2.299l-4.503 3.94 1.317 5.825c.256 1.133-.97 2.004-1.957 1.42L12 18.515l-5.157 3.05c-.988.584-2.213-.287-1.957-1.42l1.316-5.825L1.7 10.38c-.873-.765-.4-2.193.747-2.299l5.972-.552zm-1.038 6.18c-.191.442-.61.744-1.088.789l-5.651.521 4.261 3.73c.363.317.524.808.417 1.279l-1.249 5.515 4.886-2.889a1.32 1.32 0 0 1 1.184-.08l.16.08 4.885 2.889-1.248-5.515a1.32 1.32 0 0 1 .417-1.28l4.26-3.729-5.65-.521a1.32 1.32 0 0 1-1.088-.79L12 3.026z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Star.displayName = "Star";
export { Star };
