import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineChartXYDescIconLinetone = memo(
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
          d="M2 3a1 1 0 0 1 1 1v12.8c0 .576.001.949.024 1.232.023.272.06.373.085.422.096.188.249.34.437.437.05.025.15.062.422.085.283.023.656.024 1.232.024H22a1 1 0 1 1 0 2H5.2c-.543 0-1.012.001-1.395-.03-.396-.033-.789-.104-1.167-.297a3 3 0 0 1-1.31-1.31c-.194-.379-.265-.772-.298-1.168C1 17.812 1 17.343 1 16.8V4a1 1 0 0 1 1-1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.324 6.263a1 1 0 0 1 1.413.061l4.828 5.267 2.468-2.234.077-.063a1 1 0 0 1 1.338.137l5.296 5.901a1 1 0 0 1-1.488 1.336l-4.625-5.154-2.46 2.227a1 1 0 0 1-1.408-.065l-5.5-6a1 1 0 0 1 .061-1.413"
        />
      </svg>
    ))
);
LineChartXYDescIconLinetone.displayName = "LineChartXYDescIconLinetone";
export { LineChartXYDescIconLinetone };
