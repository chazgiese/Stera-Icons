import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WrenchIconFill = memo(
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
          d="M9.635 4.328a7.1 7.1 0 0 1 6.606-1.9c1.035.237 1.197 1.455.57 2.082l-2.829 2.827.513 2.167 2.167.512 2.828-2.828c.588-.587 1.694-.482 2.026.386l.055.185.085.432a7.095 7.095 0 0 1-9.01 7.963l-4.601 4.602a3.395 3.395 0 0 1-4.8-4.801l4.6-4.602a7.1 7.1 0 0 1 1.79-7.025"
        />
      </svg>
    ))
);
WrenchIconFill.displayName = "WrenchIconFill";
export { WrenchIconFill };
