import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineChartXYDescIconBold = memo(
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
        />
        <path
          fill="currentColor"
          d="M6.445 3.168a1 1 0 0 1 1.387.277l5.324 7.985 2.637-2.637a1 1 0 0 1 1.5.098l.064.094 4.5 7.5a1 1 0 0 1-1.714 1.03l-3.841-6.403-2.595 2.595a1 1 0 0 1-1.539-.152l-6-9a1 1 0 0 1 .277-1.387"
        />
      </svg>
    ))
);
LineChartXYDescIconBold.displayName = "LineChartXYDescIconBold";
export { LineChartXYDescIconBold };
