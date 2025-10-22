import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ClockIconFilltone = memo(
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
          d="M12 6a1 1 0 0 1 1 1v4.585l3.243 3.243a1 1 0 0 1-1.415 1.414l-3.535-3.535a1 1 0 0 1-.173-.232l-.02-.042A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ClockIconFilltone.displayName = "ClockIconFilltone";
export { ClockIconFilltone };
