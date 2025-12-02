import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartScatterIcon = memo(
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
          d="M2 3.25a.75.75 0 0 1 .75.75v12.8c0 .572 0 .957.024 1.253.024.287.067.424.113.514.12.235.31.427.546.546.09.046.227.09.514.113.296.024.68.024 1.253.024H21a.75.75 0 0 1 0 1.5H5.2c-.547 0-1.004.001-1.375-.03-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.202c-.172-.337-.24-.694-.27-1.073-.031-.371-.03-.828-.03-1.375V4A.75.75 0 0 1 2 3.25"
        />
        <path
          fill="currentColor"
          d="M6.5 14.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M11.5 12.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 12.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M15.5 8.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M8.5 6.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
        />
      </svg>
    ))
);
ChartScatterIcon.displayName = "ChartScatterIcon";
export { ChartScatterIcon };
