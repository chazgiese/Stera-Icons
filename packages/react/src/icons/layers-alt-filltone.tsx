import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersAltIconFilltone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M20.553 15.605a1 1 0 0 1 .894 1.79L14.237 21a5 5 0 0 1-4.474 0l-7.21-3.606a1 1 0 0 1 .894-1.789l7.211 3.606a3 3 0 0 0 2.684 0z" />
          <path d="M20.553 11.605a1 1 0 0 1 .894 1.79L14.237 17a5 5 0 0 1-4.474 0l-7.21-3.606a1 1 0 0 1 .894-1.789l7.211 3.606a3 3 0 0 0 2.684 0z" />
        </g>
        <path
          fill="currentColor"
          d="M9.764 3a5 5 0 0 1 4.473 0l6.869 3.435c1.29.645 1.29 2.486 0 3.13l-6.87 3.436a5 5 0 0 1-4.472 0L2.895 9.566c-1.29-.645-1.29-2.486 0-3.13z"
        />
      </svg>
    ))
);
LayersAltIconFilltone.displayName = "LayersAltIconFilltone";
export { LayersAltIconFilltone };
