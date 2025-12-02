import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SunriseIconBold = memo(
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
          d="M14 20a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zM18 16.667a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2zM22 13.333a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2a9 9 0 0 1 9 9 1 1 0 0 1-1 1H4a1 1 0 0 1-1-1 9 9 0 0 1 9-9m0 2a7 7 0 0 0-6.928 6h13.856A7 7 0 0 0 12 4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SunriseIconBold.displayName = "SunriseIconBold";
export { SunriseIconBold };
