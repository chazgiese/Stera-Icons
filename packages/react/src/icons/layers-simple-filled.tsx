import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersSimpleIconFilled = memo(
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
          d="M21.348 13.244c1.39.758 1.39 2.754 0 3.512l-7.073 3.857a4.75 4.75 0 0 1-4.549 0l-7.073-3.857c-1.39-.758-1.39-2.754 0-3.512l.453-.248 5.782 3.154a6.5 6.5 0 0 0 6.225 0l5.781-3.154z"
        />
        <path
          fill="currentColor"
          d="M9.606 3.167a5 5 0 0 1 4.79 0l7.072 3.857c1.563.853 1.563 3.099 0 3.951l-7.073 3.858a5 5 0 0 1-4.789 0l-7.072-3.858c-1.564-.852-1.564-3.098 0-3.95z"
        />
      </svg>
    ))
);
LayersSimpleIconFilled.displayName = "LayersSimpleIconFilled";
export { LayersSimpleIconFilled };
