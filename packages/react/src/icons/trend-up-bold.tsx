import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TrendUpIconBold = memo(
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
          d="M22.5 4a1.005 1.005 0 0 1 .942.667l.014.04.016.062A1 1 0 0 1 23.5 5v6a1 1 0 1 1-2 0V7.414l-7.793 7.793a1 1 0 0 1-1.414 0L9.5 12.414l-7.293 7.293a1 1 0 1 1-1.414-1.414l8-8 .073-.066a1 1 0 0 1 1.341.066L13 13.086 20.086 6H16.5a1 1 0 0 1 0-2z"
        />
      </svg>
    ))
);
TrendUpIconBold.displayName = "TrendUpIconBold";
export { TrendUpIconBold };
