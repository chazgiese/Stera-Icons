import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartPieIcon = memo(
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
          d="M7.7 2.144a.75.75 0 0 1 .6 1.375A9.25 9.25 0 1 0 20.48 15.7a.75.75 0 0 1 1.375.6A10.75 10.75 0 0 1 12 22.75C6.063 22.75 1.25 17.938 1.25 12c0-4.408 2.655-8.196 6.45-9.855"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.073 1.304a10.75 10.75 0 0 1 9.623 9.623c.105 1.041-.752 1.823-1.696 1.823h-8A1.75 1.75 0 0 1 11.25 11V3c0-.944.782-1.8 1.823-1.696m-.15 1.492a.13.13 0 0 0-.108.04.23.23 0 0 0-.065.164v8c0 .138.112.25.25.25h8c.072 0 .129-.03.164-.066a.13.13 0 0 0 .04-.108 9.254 9.254 0 0 0-8.28-8.28"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartPieIcon.displayName = "ChartPieIcon";
export { ChartPieIcon };
