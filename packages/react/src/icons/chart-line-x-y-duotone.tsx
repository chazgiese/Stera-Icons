import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartLineXYIconDuotone = memo(
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
          d="M19.394 5.559a.75.75 0 0 1 1.213.883l-4.667 6.4a.75.75 0 0 1-.97.214l-3.791-2.1-4.603 5.525a.75.75 0 0 1-1.152-.961l5-6a.75.75 0 0 1 .94-.176l3.753 2.079z"
        />
      </svg>
    ))
);
ChartLineXYIconDuotone.displayName = "ChartLineXYIconDuotone";
export { ChartLineXYIconDuotone };
