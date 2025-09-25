import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BannerFilled = memo(
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
          d="M21.5 2a1 1 0 0 1 0 2H20v11.679a5 5 0 0 1-2.52 4.34l-4.488 2.566a2 2 0 0 1-1.984 0L6.52 20.02A5 5 0 0 1 4 15.679V4H2.5a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
BannerFilled.displayName = "BannerFilled";
export { BannerFilled };
