import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartDonutIconFilled = memo(
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
          d="M11.001 8.082c-1.723.464-3.06 2.083-3.05 3.918.012 2.168 1.86 4.05 4.049 4.05a3.95 3.95 0 0 0 2.053-.583l4.985 4.985A10.95 10.95 0 0 1 12 23C5.925 23 1 18.075 1 12 1 6.262 5.394 1.552 11.001 1.047z"
        />
        <path
          fill="currentColor"
          d="M22.506 8.73C22.827 9.763 23 10.861 23 12c0 2.678-.958 5.13-2.548 7.038l-4.986-4.986c.369-.608.585-1.312.585-2.052a4 4 0 0 0-.045-.577zM13.001 1.047c3.8.343 7.04 2.619 8.735 5.837l-6.514 2.698A4.14 4.14 0 0 0 13 8.081z"
        />
      </svg>
    ))
);
ChartDonutIconFilled.displayName = "ChartDonutIconFilled";
export { ChartDonutIconFilled };
