import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScatterChartIconLinetone = memo(
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
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M7.5 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12.5 12a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M8.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M19.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </svg>
    ))
);
ScatterChartIconLinetone.displayName = "ScatterChartIconLinetone";
export { ScatterChartIconLinetone };
