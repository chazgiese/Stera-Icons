import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersSimpleIconFilltone = memo(
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
          d="M22.654 13.057c1.487.868 1.487 3.018 0 3.886L14.52 21.69a5 5 0 0 1-5.04 0l-8.133-4.746c-1.488-.868-1.488-3.018 0-3.886L3.157 12l6.324 3.688a5 5 0 0 0 5.039 0L20.842 12z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M9.48 2.311a5 5 0 0 1 5.04 0l8.134 4.745c1.487.868 1.487 3.019 0 3.887l-8.134 4.745a5 5 0 0 1-5.04 0l-8.133-4.745c-1.488-.868-1.488-3.018 0-3.887z"
        />
      </svg>
    ))
);
LayersSimpleIconFilltone.displayName = "LayersSimpleIconFilltone";
export { LayersSimpleIconFilltone };
