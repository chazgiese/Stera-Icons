import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartDonutIconLinetone = memo(
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
          d="M12 1q.505 0 1 .045a11 11 0 0 1 9.506 7.686c.32 1.033.494 2.13.494 3.269 0 2.678-.957 5.132-2.547 7.04-.427.512-.901.986-1.414 1.413l-5.745-5.745a3 3 0 0 0 1.414-1.414 3 3 0 0 0 .288-1.453A3.005 3.005 0 0 0 11 9.17V1.045Q11.495 1 12 1m4.91 10.049q.088.463.09.951c0 1.02-.305 1.967-.828 2.758l2.86 2.86A8.96 8.96 0 0 0 21 12c0-.867-.123-1.706-.352-2.5zM13 7.099a5 5 0 0 1 3.144 2.102l3.739-1.548A9 9 0 0 0 13 3.055z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7 12a5 5 0 0 1 4-4.9v2.07a3.001 3.001 0 1 0 2.294 5.538l1.463 1.464A5 5 0 0 1 7 12"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1 12C1 6.262 5.393 1.55 11 1.045v2.01a9.001 9.001 0 1 0 6.618 15.977l1.421 1.421A10.96 10.96 0 0 1 12 23C5.925 23 1 18.075 1 12"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartDonutIconLinetone.displayName = "ChartDonutIconLinetone";
export { ChartDonutIconLinetone };
