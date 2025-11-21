import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleNotchIconLinetone = memo(
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
          d="M12.541 1.014a11 11 0 0 1 7.237 3.208 1 1 0 0 0-1.42 1.407 9 9 0 0 0-9.802-1.943 9 9 0 0 0-2.92 1.95 1 1 0 0 0-1.399-1.43 11 11 0 0 1 7.222-3.192L12 1z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.364 4.222a1 1 0 0 1 1.414 0 11.003 11.003 0 0 1-1.667 16.925A11.001 11.001 0 0 1 4.22 4.222a1 1 0 0 1 1.414 1.414A9.002 9.002 0 0 0 12 21a9.001 9.001 0 0 0 6.365-15.364 1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
CircleNotchIconLinetone.displayName = "CircleNotchIconLinetone";
export { CircleNotchIconLinetone };
