import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SpinnerIconLinetone = memo(
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
          <path d="M6.34 16.246a1 1 0 0 1 1.414 1.414l-2.121 2.121a1 1 0 0 1-1.415-1.414zM16.24 16.246a1 1 0 0 1 1.413 0l2.121 2.121a1 1 0 0 1-1.414 1.414l-2.12-2.12a1 1 0 0 1 0-1.415M4.218 4.223a1 1 0 0 1 1.414 0l2.12 2.12A1 1 0 1 1 6.34 7.759L4.218 5.637a1 1 0 0 1 0-1.414M18.36 4.223a1 1 0 0 1 1.414 1.414l-2.12 2.12a1.001 1.001 0 0 1-1.416-1.413z" />
        </g>
        <path
          fill="currentColor"
          d="M12 18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M5 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM12 1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
SpinnerIconLinetone.displayName = "SpinnerIconLinetone";
export { SpinnerIconLinetone };
