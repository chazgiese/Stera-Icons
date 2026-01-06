import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ArrowsUpDownIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M7.75 4.81V21a.75.75 0 0 1-1.5 0V4.81L7 4.06zM17 3.25a.75.75 0 0 1 .75.75v16.19l-.75.75-.75-.75V4a.75.75 0 0 1 .75-.75" />
        </g>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 7 7 3 3 7m18 11-4 4-4-4"
        />
      </svg>
    ))
);
ArrowsUpDownIconDuotone.displayName = "ArrowsUpDownIconDuotone";
export { ArrowsUpDownIconDuotone };
