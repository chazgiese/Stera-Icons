import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartPieAltIconFilltone = memo(
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
          d="M11 11.993a1 1 0 0 0 .293.714l7.745 7.745A10.95 10.95 0 0 1 12 23C5.925 23 1 18.075 1 12 1 6.262 5.394 1.552 11 1.047z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M22.506 8.73C22.827 9.763 23 10.861 23 12c0 2.678-.958 5.13-2.548 7.038l-6.687-6.687zM13 1.047a11 11 0 0 1 8.736 5.837L13 10.503z"
        />
      </svg>
    ))
);
ChartPieAltIconFilltone.displayName = "ChartPieAltIconFilltone";
export { ChartPieAltIconFilltone };
