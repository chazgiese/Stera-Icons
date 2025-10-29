import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowURightTopIconFilltone = memo(
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
          d="M17 6v2H8.5a5.5 5.5 0 1 0 0 11H16a1 1 0 1 1 0 2H8.5a7.5 7.5 0 0 1 0-15z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.707 2.293A1 1 0 0 0 17 3v8a1 1 0 0 0 1.707.707l4-4a1 1 0 0 0 .066-1.34l-.066-.074z"
        />
      </svg>
    ))
);
ArrowURightTopIconFilltone.displayName = "ArrowURightTopIconFilltone";
export { ArrowURightTopIconFilltone };
