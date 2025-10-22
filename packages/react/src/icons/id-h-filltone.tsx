import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const IdHIconFilltone = memo(
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
          d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M8.33 7.5a3 3 0 0 1 3 3c0 .993-.485 1.869-1.228 2.415a4.01 4.01 0 0 1 2 2.252 1 1 0 0 1-.943 1.333H5.5a1 1 0 0 1-.942-1.333 4.01 4.01 0 0 1 1.997-2.252A3 3 0 0 1 5.329 10.5a3 3 0 0 1 3-3M19 13a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2zM19 9a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
IdHIconFilltone.displayName = "IdHIconFilltone";
export { IdHIconFilltone };
