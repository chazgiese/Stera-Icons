import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartWaterfallXYIconBoldDuotone = memo(
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
          d="M6 12a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M10.667 7a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M20.001 2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M15.334 4a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ChartWaterfallXYIconBoldDuotone.displayName = "ChartWaterfallXYIconBoldDuotone";
export { ChartWaterfallXYIconBoldDuotone };
