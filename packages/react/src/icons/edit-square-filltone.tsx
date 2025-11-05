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
          d="M16 2q.502 0 .981.081L9.4 9.862a.5.5 0 0 0-.108.17l-.02.064-1.257 5.289a.5.5 0 0 0 .58.606l5.5-1.046c.1-.019.193-.069.264-.142l7.564-7.762q.077.468.078.959v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M17.526 1.526a3.5 3.5 0 0 1 4.953 4.944l-8.12 8.333a.5.5 0 0 1-.265.142l-5.5 1.046a.5.5 0 0 1-.58-.606l1.257-5.29.02-.064a.5.5 0 0 1 .109-.168l8.12-8.334z"
        />
      </svg>
    ))
);
EditSquareIconFilltone.displayName = "EditSquareIconFilltone";
export { EditSquareIconFilltone };
