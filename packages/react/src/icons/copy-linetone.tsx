import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CopyIconLinetone = memo(
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
          stroke="currentColor"
          strokeWidth={2}
          d="M8 8c0-1.396 0-2.095.196-2.656a3.5 3.5 0 0 1 2.148-2.148C10.905 3 11.604 3 13 3h2.4c1.96 0 2.94 0 3.689.381a3.5 3.5 0 0 1 1.53 1.53C21 5.66 21 6.64 21 8.6V11c0 1.396 0 2.095-.196 2.656a3.5 3.5 0 0 1-2.148 2.148C18.095 16 17.396 16 16 16"
          opacity={0.32}
        />
        <rect
          width={13}
          height={13}
          x={3}
          y={8}
          stroke="currentColor"
          strokeWidth={2}
          rx={3.5}
        />
      </svg>
    ))
);
CopyIconLinetone.displayName = "CopyIconLinetone";
export { CopyIconLinetone };
