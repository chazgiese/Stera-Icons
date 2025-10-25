import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BankIconFilltone = memo(
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
          <path d="M18.75 17A2.25 2.25 0 0 1 21 19.25V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.75A2.25 2.25 0 0 1 5.25 17zM11.575 2.095a1 1 0 0 1 .98.073l9 6A1 1 0 0 1 21 10H3a1 1 0 0 1-.555-1.832l9-6z" />
        </g>
        <path
          fill="currentColor"
          d="M21 20a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM7 17H5v-7h2zm4 0H9v-7h2zm4 0h-2v-7h2zm4 0h-2v-7h2zM12 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
BankIconFilltone.displayName = "BankIconFilltone";
export { BankIconFilltone };
