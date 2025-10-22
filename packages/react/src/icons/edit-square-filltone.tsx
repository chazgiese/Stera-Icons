import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EditSquareIconFilltone = memo(
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
          d="M16 2a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M17.526 1.526a3.5 3.5 0 0 1 4.953 4.944v.001l-8.12 8.332a.5.5 0 0 1-.265.143l-5.5 1.046a.5.5 0 0 1-.58-.607l1.257-5.289.02-.065a.5.5 0 0 1 .109-.168l8.12-8.333z"
        />
      </svg>
    ))
);
EditSquareIconFilltone.displayName = "EditSquareIconFilltone";
export { EditSquareIconFilltone };
