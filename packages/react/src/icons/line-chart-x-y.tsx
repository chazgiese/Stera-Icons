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
          d="M20.376 3.584a.75.75 0 1 1 1.248.832l-6 9a.75.75 0 0 1-1.154.114l-2.822-2.821-4.004 6.677a.75.75 0 0 1-1.288-.772l4.5-7.5.05-.071a.75.75 0 0 1 1.124-.073l2.853 2.852z"
        />
      </svg>
    ))
);
LineChartXYIcon.displayName = "LineChartXYIcon";
export { LineChartXYIcon };
