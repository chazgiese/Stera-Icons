import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparkleCircleIconBoldDuotone = memo(
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
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M11.732 6.536a.3.3 0 0 1 .537 0l1.134 2.272a4 4 0 0 0 1.79 1.788l2.27 1.136a.3.3 0 0 1 0 .537l-2.27 1.134a4 4 0 0 0-1.79 1.79l-1.134 2.27a.3.3 0 0 1-.537 0l-1.136-2.27a4 4 0 0 0-1.788-1.79L6.536 12.27a.3.3 0 0 1 0-.537l2.272-1.136a4 4 0 0 0 1.788-1.788z"
        />
      </svg>
    ))
);
SparkleCircleIconBoldDuotone.displayName = "SparkleCircleIconBoldDuotone";
export { SparkleCircleIconBoldDuotone };
