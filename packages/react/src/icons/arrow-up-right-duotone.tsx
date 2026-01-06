import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowUpRightIconDuotone = memo(
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
          d="M17.25 6.75v1.06L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18 5.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V6.75H8a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ArrowUpRightIconDuotone.displayName = "ArrowUpRightIconDuotone";
export { ArrowUpRightIconDuotone };
