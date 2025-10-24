import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersSimpleIconLinetone = memo(
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
          d="M17.993 11.497a1 1 0 0 1 1.369-.36l3.292 1.92c1.487.869 1.487 3.019 0 3.887l-8.134 4.745a5 5 0 0 1-5.04 0l-8.133-4.745c-1.488-.868-1.488-3.018 0-3.887l3.292-1.92a1 1 0 0 1 1.008 1.728l-3.292 1.92a.25.25 0 0 0 0 .431l8.134 4.746c.933.544 2.089.544 3.023 0l8.134-4.746a.25.25 0 0 0 0-.431l-3.292-1.92a1 1 0 0 1-.36-1.368"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.48 2.311a5 5 0 0 1 5.04 0l8.134 4.745c1.487.868 1.487 3.019 0 3.887l-8.134 4.745a5 5 0 0 1-5.04 0l-8.133-4.745c-1.488-.868-1.488-3.018 0-3.887zm4.032 1.728a3 3 0 0 0-3.024 0L2.356 8.784a.25.25 0 0 0 0 .431l8.134 4.746a3 3 0 0 0 3.023 0l8.134-4.746a.25.25 0 0 0 0-.431z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersSimpleIconLinetone.displayName = "LayersSimpleIconLinetone";
export { LayersSimpleIconLinetone };
