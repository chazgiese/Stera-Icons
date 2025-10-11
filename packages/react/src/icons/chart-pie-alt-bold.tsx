import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartPieAltIconBold = memo(
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
          fillRule="evenodd"
          d="M12 1c4.585 0 8.513 2.805 10.165 6.79A11 11 0 0 1 23 12c0 3.037-1.232 5.789-3.222 7.778A10.97 10.97 0 0 1 12 23C5.925 23 1 18.075 1 12S5.925 1 12 1m-1 2.057a9 9 0 1 0 6.616 15.974l-6.323-6.324A1 1 0 0 1 11 12zm2.765 9.294 5.265 5.265A8.96 8.96 0 0 0 21 12a9 9 0 0 0-.355-2.5zM13 10.503l6.882-2.85A9 9 0 0 0 13 3.055z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartPieAltIconBold.displayName = "ChartPieAltIconBold";
export { ChartPieAltIconBold };
