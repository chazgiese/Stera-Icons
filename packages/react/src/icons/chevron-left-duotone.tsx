import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChevronLeftIconDuotone = memo(
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
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m8 12 7-7"
        />
        <path
          fill="currentColor"
          d="M15.53 18.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 0 1.06 0l.53-.53z"
          opacity={0.4}
        />
      </svg>
    ))
);
ChevronLeftIconDuotone.displayName = "ChevronLeftIconDuotone";
export { ChevronLeftIconDuotone };
