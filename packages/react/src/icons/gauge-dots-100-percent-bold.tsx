import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GaugeDots100PercentIconBold = memo(
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
          d="M7.404 15.097a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M10.586 10.586a2 2 0 0 1 2.828 0l.053.057c.33.385 1.42 1.838 2.39 3.144a659 659 0 0 1 1.74 2.356l.117.158.031.042.008.01.002.004a1 1 0 0 1-1.401 1.396l-.01-.008-.043-.031-.157-.116-.574-.422c-.476-.351-1.118-.826-1.782-1.32-1.306-.97-2.76-2.059-3.145-2.39l-.057-.052a2 2 0 0 1 0-2.828M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.404 5.904a1.5 1.5 0 1 1 0 3.001 1.5 1.5 0 0 1 0-3M16.597 5.904a1.5 1.5 0 1 1-.001 3.001 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GaugeDots100PercentIconBold.displayName = "GaugeDots100PercentIconBold";
export { GaugeDots100PercentIconBold };
