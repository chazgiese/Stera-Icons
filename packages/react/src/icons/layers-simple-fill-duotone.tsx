import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersSimpleIconFillDuotone = memo(
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
          d="M9.606 3.167a5 5 0 0 1 4.789 0l7.072 3.857c1.563.853 1.563 3.099 0 3.951l-7.072 3.858a5 5 0 0 1-4.79 0l-7.072-3.858c-1.563-.852-1.563-3.098 0-3.95z"
        />
        <path
          fill="currentColor"
          d="M21.467 13.024c1.563.853 1.563 3.099 0 3.952l-7.072 3.857a5 5 0 0 1-4.79 0l-7.072-3.857c-1.563-.853-1.563-3.099 0-3.952L4.411 12l5.195 2.833a5 5 0 0 0 4.789 0L19.588 12z"
          opacity={0.4}
        />
      </svg>
    ))
);
LayersSimpleIconFillDuotone.displayName = "LayersSimpleIconFillDuotone";
export { LayersSimpleIconFillDuotone };
