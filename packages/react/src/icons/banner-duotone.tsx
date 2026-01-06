import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BannerIconDuotone = memo(
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
          d="M19.75 15.679a4.75 4.75 0 0 1-2.394 4.124l-4.364 2.494a2 2 0 0 1-1.984 0l-4.364-2.494a4.75 4.75 0 0 1-2.394-4.124V3.75h1.5v11.929c0 1.166.625 2.243 1.638 2.822l4.364 2.493a.5.5 0 0 0 .496 0l4.364-2.493a3.25 3.25 0 0 0 1.638-2.822V3.75h1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M21.5 2.25a.75.75 0 0 1 0 1.5h-19a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
BannerIconDuotone.displayName = "BannerIconDuotone";
export { BannerIconDuotone };
