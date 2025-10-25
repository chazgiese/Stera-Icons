import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BannerIconFilltone = memo(
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
          d="M19 2.25a.75.75 0 0 1 .75.75v12.679a4.75 4.75 0 0 1-2.394 4.124l-4.364 2.494a2 2 0 0 1-1.984 0l-4.364-2.494a4.75 4.75 0 0 1-2.394-4.124V3A.75.75 0 0 1 5 2.25z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M21.5 2a1 1 0 0 1 0 2h-19a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
BannerIconFilltone.displayName = "BannerIconFilltone";
export { BannerIconFilltone };
