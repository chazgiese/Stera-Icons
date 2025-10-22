import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronsDownIconFilltone = memo(
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
          d="M17.94 3.94a1.5 1.5 0 1 1 2.12 2.12l-7 7a1.5 1.5 0 0 1-2.12 0l-7-7a1.5 1.5 0 1 1 2.12-2.12L12 9.878z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M17.94 11.94a1.5 1.5 0 0 1 2.12 2.12l-7 7a1.5 1.5 0 0 1-2.12 0l-7-7a1.5 1.5 0 1 1 2.12-2.12L12 17.878z"
        />
      </svg>
    ))
);
ChevronsDownIconFilltone.displayName = "ChevronsDownIconFilltone";
export { ChevronsDownIconFilltone };
