import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HeartIconBold = memo(
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
          d="M16.762 2C20.225 2 23 4.856 23 8.339c0 2.641-1.392 4.68-1.9 5.406-2.484 3.544-5.95 5.977-8.468 8.03a1 1 0 0 1-1.264 0C8.85 19.722 5.384 17.29 2.9 13.746 2.392 13.02 1 10.98 1 8.34 1 4.856 3.775 2 7.238 2A6.18 6.18 0 0 1 12 4.247 6.18 6.18 0 0 1 16.762 2m0 2c-1.698 0-3.174 1.025-3.85 2.525a1 1 0 0 1-1.824 0C10.412 5.025 8.936 4 7.238 4 4.916 4 3 5.925 3 8.339c0 1.976 1.057 3.57 1.54 4.259 2.1 2.997 4.938 5.106 7.46 7.122 2.523-2.017 5.36-4.124 7.46-7.122.483-.688 1.54-2.283 1.54-4.26C21 5.926 19.084 4 16.762 4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HeartIconBold.displayName = "HeartIconBold";
export { HeartIconBold };
