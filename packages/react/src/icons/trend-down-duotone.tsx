import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrendDownIconDuotone = memo(
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
          d="M.97 4.47a.75.75 0 0 1 1.06 0l7.47 7.47 2.97-2.97a.75.75 0 0 1 1.06 0l8.22 8.22v1.06h-1.06L13 10.56l-2.97 2.97a.75.75 0 0 1-.946.094l-.114-.094-8-8a.75.75 0 0 1 0-1.06"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M22.5 12.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25V13a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
TrendDownIconDuotone.displayName = "TrendDownIconDuotone";
export { TrendDownIconDuotone };
