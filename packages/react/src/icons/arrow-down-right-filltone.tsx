import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowDownRightIconFilltone = memo(
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
          d="M5.293 5.293a1 1 0 0 1 1.414 0l6.793 6.793-1.414 1.414-6.793-6.793a1 1 0 0 1 0-1.414"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M17.293 8.293A1 1 0 0 1 19 9v9a1 1 0 0 1-1 1H9a1 1 0 0 1-.707-1.707z"
        />
      </svg>
    ))
);
ArrowDownRightIconFilltone.displayName = "ArrowDownRightIconFilltone";
export { ArrowDownRightIconFilltone };
