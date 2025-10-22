import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineUpIconBold = memo(
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
          d="M3 3a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1M4.293 13.293a1 1 0 1 0 1.414 1.414L11 9.414V21a1 1 0 1 0 2 0V9.414l5.293 5.293a1 1 0 1 0 1.414-1.414l-7-7a1 1 0 0 0-1.414 0z"
        />
      </svg>
    ))
);
ArrowLineUpIconBold.displayName = "ArrowLineUpIconBold";
export { ArrowLineUpIconBold };
