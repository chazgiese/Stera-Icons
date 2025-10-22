import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CliIconFilltone = memo(
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
          d="M22 17.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1 0-3z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M1.94 3.94a1.5 1.5 0 0 1 2.12 0l7 7a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 0 1-2.12-2.122l5.938-5.94L1.94 6.06a1.5 1.5 0 0 1 0-2.12"
        />
      </svg>
    ))
);
CliIconFilltone.displayName = "CliIconFilltone";
export { CliIconFilltone };
