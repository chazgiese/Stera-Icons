import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersSimpleIconDuotone = memo(
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
          d="M21.348 13.244c1.39.758 1.39 2.754 0 3.512l-7.074 3.857a4.75 4.75 0 0 1-4.548 0l-7.074-3.857c-1.389-.758-1.389-2.754 0-3.512L4.934 12l1.566.854-3.129 1.708a.5.5 0 0 0 0 .877l7.072 3.858c.97.529 2.144.529 3.114 0l7.072-3.859a.5.5 0 0 0 0-.876l-3.13-1.708L19.065 12z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.726 3.387a4.75 4.75 0 0 1 4.548 0l7.074 3.857c1.389.758 1.389 2.754 0 3.512l-7.074 3.857a4.75 4.75 0 0 1-4.548 0l-7.074-3.857c-1.39-.758-1.389-2.754 0-3.512zm3.83 1.316a3.25 3.25 0 0 0-3.113 0L3.371 8.562a.5.5 0 0 0 0 .877l7.072 3.858c.97.53 2.144.53 3.114 0l7.072-3.858a.5.5 0 0 0 0-.877z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersSimpleIconDuotone.displayName = "LayersSimpleIconDuotone";
export { LayersSimpleIconDuotone };
