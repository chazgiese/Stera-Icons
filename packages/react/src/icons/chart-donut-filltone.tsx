import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartDonutIconFilltone = memo(
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
          d="M11 8.335a3.8 3.8 0 0 0-2.16 1.554 3.803 3.803 0 0 0 .749 5.049 3.8 3.8 0 0 0 4.294.36l5.155 5.154A10.999 10.999 0 1 1 6.814 2.3c1.3-.695 2.725-1.12 4.187-1.254z"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M22.502 8.732c.544 1.748.646 3.608.287 5.414a11 11 0 0 1-2.338 4.891l-5.154-5.154c.202-.354.35-.738.43-1.142s.09-.815.04-1.22zM13 1.047c1.823.166 3.58.784 5.111 1.807a11 11 0 0 1 3.625 4.03l-6.735 2.79a3.8 3.8 0 0 0-.89-.833A3.8 3.8 0 0 0 13 8.336z" />
        </g>
      </svg>
    ))
);
ChartDonutIconFilltone.displayName = "ChartDonutIconFilltone";
export { ChartDonutIconFilltone };
