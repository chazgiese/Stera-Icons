import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineChartXYDescIcon = memo(
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
          d="M3 2.25a.75.75 0 0 1 .75.75v14.8c0 .572 0 .957.024 1.253.024.287.067.424.113.514.12.235.31.427.546.546.09.046.227.09.514.113.296.024.68.024 1.253.024H21a.75.75 0 0 1 0 1.5H6.2c-.547 0-1.004.001-1.375-.03-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.202c-.172-.337-.24-.694-.27-1.073-.031-.371-.03-.828-.03-1.375V3A.75.75 0 0 1 3 2.25"
        />
        <path
          fill="currentColor"
          d="M6.559 6.394a.75.75 0 0 1 1.047.165l4.277 5.864 3.754-2.08a.75.75 0 0 1 .94.177l5 6a.75.75 0 0 1-1.153.96l-4.603-5.524-3.79 2.1a.75.75 0 0 1-.97-.214l-4.667-6.4a.75.75 0 0 1 .165-1.048"
        />
      </svg>
    ))
);
LineChartXYDescIcon.displayName = "LineChartXYDescIcon";
export { LineChartXYDescIcon };
