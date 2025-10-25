import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleDashSimpleIconFilltone = memo(
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
          <path d="M16.5 19.796a1 1 0 0 1 1.002 1.731C15.882 22.464 14.002 23 12 23s-3.883-.536-5.502-1.473A1 1 0 0 1 7.5 19.796 8.96 8.96 0 0 0 12 21a8.96 8.96 0 0 0 4.5-1.204M2.473 6.498A1 1 0 0 1 4.204 7.5 8.95 8.95 0 0 0 3 12c0 1.641.439 3.177 1.204 4.5a1 1 0 0 1-1.731 1.002A10.96 10.96 0 0 1 1 12c0-2.002.536-3.883 1.473-5.502M20.161 6.134a1 1 0 0 1 1.366.364C22.464 8.118 23 9.998 23 12s-.536 3.883-1.473 5.502a1 1 0 0 1-1.731-1.002A8.96 8.96 0 0 0 21 12a8.96 8.96 0 0 0-1.204-4.5 1 1 0 0 1 .365-1.366M12 1c2.002 0 3.883.536 5.502 1.473A1 1 0 0 1 16.5 4.204 8.95 8.95 0 0 0 12 3a8.95 8.95 0 0 0-4.5 1.204 1 1 0 0 1-1.002-1.731C8.118 1.536 9.998 1 12 1" />
        </g>
        <path fill="currentColor" d="M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14" />
      </svg>
    ))
);
CircleDashSimpleIconFilltone.displayName = "CircleDashSimpleIconFilltone";
export { CircleDashSimpleIconFilltone };
