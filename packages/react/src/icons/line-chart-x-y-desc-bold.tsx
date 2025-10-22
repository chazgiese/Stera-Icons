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
          d="M6.411 6.192a1 1 0 0 1 1.397.22l4.147 5.686 3.56-1.973a1 1 0 0 1 1.254.234l5 6a1.001 1.001 0 0 1-1.538 1.282l-4.47-5.366-3.61 2a1 1 0 0 1-1.293-.286l-4.666-6.4a1 1 0 0 1 .22-1.397"
        />
      </svg>
    ))
);
LineChartXYDescIconBold.displayName = "LineChartXYDescIconBold";
export { LineChartXYDescIconBold };
