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
          d="M7 12a5 5 0 0 1 4-4.9v2.07a3.001 3.001 0 1 0 2.294 5.538l1.463 1.464A5 5 0 0 1 7 12"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1 12C1 6.262 5.393 1.55 11 1.045v2.01a9.001 9.001 0 1 0 6.618 15.977l1.421 1.421A10.96 10.96 0 0 1 12 23C5.925 23 1 18.075 1 12"
          clipRule="evenodd"
        />
        <g fill="currentColor" opacity={0.4}>
          <path
            fillRule="evenodd"
            d="M16.91 11.048q.09.463.09.952c0 1.02-.305 1.967-.828 2.758l-1.464-1.464a3 3 0 0 0 .288-1.453zM22.506 8.731C22.827 9.764 23 10.861 23 12c0 2.678-.957 5.132-2.547 7.04l-1.421-1.422A8.96 8.96 0 0 0 21 12c0-.867-.123-1.706-.352-2.5z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="m19.032 17.618 1.421 1.421q-.642.771-1.414 1.414l-1.421-1.421a9 9 0 0 0 1.414-1.414M13 1.045a11 11 0 0 1 8.74 5.839l-1.858.769A9 9 0 0 0 13 3.055zM11 3.055v-2.01a11 11 0 0 1 2 0v2.01a9 9 0 0 0-2 0"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M13 7.1a5 5 0 0 0-2 0V3.055a9 9 0 0 1 2 0z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M11 9.17V7.1a5 5 0 0 1 2 0v2.07a3 3 0 0 0-2 0M13 7.1a5 5 0 0 1 3.144 2.101l-1.914.792A3 3 0 0 0 13 9.171z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="m16.91 11.048-1.914.793a3 3 0 0 0-.766-1.848l1.914-.792c.37.548.636 1.174.766 1.847"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M19.882 7.653c.32.58.58 1.198.766 1.847l-3.738 1.548a5 5 0 0 0-.766-1.847z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="m22.506 8.731-1.858.77a9 9 0 0 0-.766-1.848l1.858-.77q.465.882.766 1.848M19.032 17.618a9 9 0 0 1-1.414 1.414l-2.86-2.86a5 5 0 0 0 1.414-1.415z"
            clipRule="evenodd"
          />
          <path d="m14.708 13.294 1.464 1.463a5 5 0 0 1-1.415 1.415l-1.463-1.464a3 3 0 0 0 1.414-1.415" />
        </g>
      </svg>
    ))
);
ChartDonutIconLinetone.displayName = "ChartDonutIconLinetone";
export { ChartDonutIconLinetone };
