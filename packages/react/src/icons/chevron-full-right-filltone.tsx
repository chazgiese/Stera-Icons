import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullRightIconFilltone = memo(
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
          d="M8.617 4.076a1 1 0 0 1 1.09.217l7 7a1 1 0 0 1 0 1.414l-7 7A1 1 0 0 1 8 19V5l.01-.15a1 1 0 0 1 .607-.774"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M8.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L14.586 12 8.293 5.707a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
ChevronFullRightIconFilltone.displayName = "ChevronFullRightIconFilltone";
export { ChevronFullRightIconFilltone };
