import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrendUpIconDuotone = memo(
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
          d="M21.75 5.75v1.06l-8.22 8.22a.75.75 0 0 1-1.06 0L9.5 12.06l-7.47 7.47a.75.75 0 0 1-1.06-1.06l8-8 .114-.094a.75.75 0 0 1 .946.094L13 13.44l7.69-7.69z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M22.5 4.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V5.75H16.5a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
TrendUpIconDuotone.displayName = "TrendUpIconDuotone";
export { TrendUpIconDuotone };
