import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowCornerUpRightIconDuotone = memo(
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
          d="M3 20.75a.75.75 0 0 1-.75-.75v-8A3.75 3.75 0 0 1 6 8.25h13.19l.75.75-.75.75H6A2.25 2.25 0 0 0 3.75 12v8a.75.75 0 0 1-.75.75"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M16.53 14.53a.75.75 0 1 1-1.06-1.06L19.94 9l-4.47-4.47a.75.75 0 1 1 1.06-1.06l5 5 .094.114a.75.75 0 0 1-.094.946z"
        />
      </svg>
    ))
);
ArrowCornerUpRightIconDuotone.displayName = "ArrowCornerUpRightIconDuotone";
export { ArrowCornerUpRightIconDuotone };
