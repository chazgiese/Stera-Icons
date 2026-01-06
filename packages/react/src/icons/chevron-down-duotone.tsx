import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronDownIconDuotone = memo(
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
          d="M18.47 8.47a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 1 1-1.06-1.06z"
        />
        <path
          fill="currentColor"
          d="M4.47 8.47a.75.75 0 0 1 1.06 0L12 14.94l-.53.53a.75.75 0 0 0 0 1.06l-7-7a.75.75 0 0 1 0-1.06"
          opacity={0.4}
        />
      </svg>
    ))
);
ChevronDownIconDuotone.displayName = "ChevronDownIconDuotone";
export { ChevronDownIconDuotone };
