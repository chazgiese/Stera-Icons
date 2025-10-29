import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparkleCircleIconFilltone = memo(
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
          d="M12 5.5a1 1 0 0 1 .957.709l.538 1.768a3.8 3.8 0 0 0 2.528 2.528l1.768.538a1 1 0 0 1 0 1.914l-1.768.538a3.8 3.8 0 0 0-2.528 2.528l-.538 1.768a1 1 0 0 1-1.914 0l-.538-1.768a3.8 3.8 0 0 0-2.528-2.528l-1.768-.538a1 1 0 0 1 0-1.914l1.768-.538a3.8 3.8 0 0 0 2.528-2.528l.538-1.768A1 1 0 0 1 12 5.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 4.5a1 1 0 0 0-.957.709l-.538 1.768a3.8 3.8 0 0 1-2.528 2.528l-1.768.538a1 1 0 0 0 0 1.914l1.768.538a3.8 3.8 0 0 1 2.528 2.528l.538 1.768a1 1 0 0 0 1.914 0l.538-1.768a3.8 3.8 0 0 1 2.528-2.528l1.768-.538a1 1 0 0 0 0-1.914l-1.768-.538a3.8 3.8 0 0 1-2.528-2.528l-.538-1.768A1 1 0 0 0 12 5.5"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
SparkleCircleIconFilltone.displayName = "SparkleCircleIconFilltone";
export { SparkleCircleIconFilltone };
