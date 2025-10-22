import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronFullCircleUpIconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12 8.25a1 1 0 0 1 .707.293l4.5 4.5a1 1 0 0 1-.707 1.707h-9a1 1 0 0 1-.707-1.707l4.5-4.5A1 1 0 0 1 12 8.25"
        />
      </svg>
    ))
);
ChevronFullCircleUpIconFilltone.displayName = "ChevronFullCircleUpIconFilltone";
export { ChevronFullCircleUpIconFilltone };
