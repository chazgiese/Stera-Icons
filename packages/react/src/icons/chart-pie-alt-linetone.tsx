import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartPieAltIconLinetone = memo(
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
          d="M12 1q.505 0 1 .045a11 11 0 0 1 9.506 7.685A11 11 0 0 1 23 12c0 2.678-.957 5.132-2.547 7.04-.427.512-.901.986-1.414 1.413l-7.732-7.732a1 1 0 0 1-.2-.272l-.006-.014A1 1 0 0 1 11 12V1.045Q11.495 1 12 1m1.765 11.35 5.267 5.268A8.96 8.96 0 0 0 21 12c0-.867-.122-1.706-.352-2.5zM13 10.504l6.883-2.85A9 9 0 0 0 13 3.055z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1 12C1 6.262 5.394 1.55 11 1.045v2.01a9.001 9.001 0 1 0 6.618 15.977l1.421 1.421A10.96 10.96 0 0 1 12 23C5.925 23 1 18.075 1 12"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
ChartPieAltIconLinetone.displayName = "ChartPieAltIconLinetone";
export { ChartPieAltIconLinetone };
