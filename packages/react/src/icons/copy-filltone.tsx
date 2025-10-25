import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CopyIconFilltone = memo(
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
        <rect
          width={13}
          height={13}
          x={8}
          y={3}
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={2}
          opacity={0.32}
          rx={3.5}
        />
        <rect
          width={13}
          height={13}
          x={3}
          y={8}
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={2}
          rx={3.5}
        />
      </svg>
    ))
);
CopyIconFilltone.displayName = "CopyIconFilltone";
export { CopyIconFilltone };
