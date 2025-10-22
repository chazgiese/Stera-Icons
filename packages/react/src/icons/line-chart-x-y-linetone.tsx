import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineChartXYIconLinetone = memo(
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
          d="M3 2a1 1 0 0 1 1 1v14.8c0 .576.001.949.024 1.232.023.272.06.373.085.422.096.188.249.34.437.437.05.025.15.062.422.085.283.023.656.024 1.232.024H21a1 1 0 1 1 0 2H6.2c-.543 0-1.012.001-1.395-.03-.396-.033-.789-.104-1.167-.297a3 3 0 0 1-1.31-1.31c-.194-.379-.265-.772-.298-1.168C2 18.812 2 18.343 2 17.8V3a1 1 0 0 1 1-1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M20.192 6.411a1 1 0 1 1 1.615 1.178l-4.666 6.4c-.297.408-.852.53-1.293.286l-3.61-2-4.47 5.366a1.002 1.002 0 0 1-1.537-1.281l5-6a1 1 0 0 1 1.253-.235l3.56 1.973z"
        />
      </svg>
    ))
);
LineChartXYIconLinetone.displayName = "LineChartXYIconLinetone";
export { LineChartXYIconLinetone };
