import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BannerIconBold = memo(
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
          d="M21.5 2a1 1 0 0 1 0 2H20v11.679a5 5 0 0 1-2.52 4.34l-4.364 2.495a2.25 2.25 0 0 1-2.232 0L6.52 20.02A5 5 0 0 1 4 15.679V4H2.5a1 1 0 0 1 0-2zM6 4v11.679a3 3 0 0 0 1.512 2.604l4.364 2.494a.25.25 0 0 0 .248 0l4.364-2.494A3 3 0 0 0 18 15.68V4z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BannerIconBold.displayName = "BannerIconBold";
export { BannerIconBold };
