import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SwatchBookIconFilltone = memo(
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
          d="M9.5 2A2.5 2.5 0 0 1 12 4.5V17a5 5 0 0 1-10 0V4.5A2.5 2.5 0 0 1 4.5 2zM7 15.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 4.931a3 3 0 0 1 4.192.048l2.83 2.828A3 3 0 0 1 19.067 12 3 3 0 0 1 22 15v4a3 3 0 0 1-3 3H7.037A5 5 0 0 0 12 17v-.758l5.606-5.607a1 1 0 0 0 0-1.414l-2.828-2.828a1 1 0 0 0-1.414 0L12 7.757zM11.071 20H19a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.929z"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
SwatchBookIconFilltone.displayName = "SwatchBookIconFilltone";
export { SwatchBookIconFilltone };
