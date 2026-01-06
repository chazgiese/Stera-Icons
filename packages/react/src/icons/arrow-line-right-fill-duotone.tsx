import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowLineRightIconFillDuotone = memo(
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
          d="M21 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9 6.086c0-1.292 1.562-1.938 2.476-1.024l5.856 5.856a1.53 1.53 0 0 1 0 2.164l-5.856 5.857c-.914.913-2.476.267-2.476-1.025V13H3a1 1 0 1 1 0-2h6z"
        />
      </svg>
    ))
);
ArrowLineRightIconFillDuotone.displayName = "ArrowLineRightIconFillDuotone";
export { ArrowLineRightIconFillDuotone };
