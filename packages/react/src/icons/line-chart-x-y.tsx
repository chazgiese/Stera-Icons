import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LineChartXYIcon = memo(
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
          d="M20.394 6.559a.75.75 0 0 1 1.212.882l-4.667 6.4a.75.75 0 0 1-.97.215l-3.79-2.1-4.603 5.525a.75.75 0 0 1-1.152-.962l5-6a.75.75 0 0 1 .94-.175l3.753 2.079z"
        />
      </svg>
    ))
);
LineChartXYIcon.displayName = "LineChartXYIcon";
export { LineChartXYIcon };
