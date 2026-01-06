import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartLineXYDescIconDuotone = memo(
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
          d="M2 3.25a.75.75 0 0 1 .75.75v12.8c0 .572 0 .957.024 1.253.024.287.067.424.113.514.12.235.31.427.546.546.09.046.227.09.514.113.296.024.68.024 1.253.024H22a.75.75 0 0 1 0 1.5H5.2c-.547 0-1.004.001-1.375-.03-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.202c-.172-.337-.24-.694-.27-1.073-.031-.371-.03-.828-.03-1.375V4A.75.75 0 0 1 2 3.25"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5.493 6.447a.75.75 0 0 1 1.06.046l4.996 5.45 2.652-2.4.12-.089a.75.75 0 0 1 .942.144l5.296 5.901a.75.75 0 0 1-1.117 1.002l-4.793-5.342-2.646 2.397a.75.75 0 0 1-1.056-.05l-5.5-6a.75.75 0 0 1 .046-1.059"
        />
      </svg>
    ))
);
ChartLineXYDescIconDuotone.displayName = "ChartLineXYDescIconDuotone";
export { ChartLineXYDescIconDuotone };
