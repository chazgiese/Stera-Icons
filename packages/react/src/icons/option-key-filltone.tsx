import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const OptionKeyIconFilltone = memo(
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
          d="M9 2.5a1.5 1.5 0 0 1 1.404.974L16.04 18.5H22a1.5 1.5 0 0 1 0 3h-7a1.5 1.5 0 0 1-1.404-.974L7.96 5.5H2a1.5 1.5 0 1 1 0-3z"
        />
        <path
          fill="currentColor"
          d="M22 2.5a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3z"
          opacity={0.32}
        />
      </svg>
    ))
);
OptionKeyIconFilltone.displayName = "OptionKeyIconFilltone";
export { OptionKeyIconFilltone };
