import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersIconFilltone = memo(
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
          <path d="M21.106 15.435c1.29.645 1.29 2.486 0 3.13L14.236 22a5 5 0 0 1-4.472 0l-6.87-3.435c-1.289-.645-1.289-2.486 0-3.13l.192-.097 6.007 3.004a6.5 6.5 0 0 0 5.815 0l6.006-3.004z" />
          <path d="M21.106 10.435c1.29.645 1.29 2.486 0 3.13L14.236 17a5 5 0 0 1-4.472 0l-6.87-3.435c-1.289-.645-1.289-2.486 0-3.13l.192-.097 6.007 3.004a6.5 6.5 0 0 0 5.815 0l6.006-3.004z" />
        </g>
        <path
          fill="currentColor"
          d="M9.764 2a5 5 0 0 1 4.473 0l6.869 3.435c1.29.645 1.29 2.486 0 3.13l-6.87 3.436a5 5 0 0 1-4.472 0L2.895 8.566c-1.29-.645-1.29-2.486 0-3.13z"
        />
      </svg>
    ))
);
LayersIconFilltone.displayName = "LayersIconFilltone";
export { LayersIconFilltone };
