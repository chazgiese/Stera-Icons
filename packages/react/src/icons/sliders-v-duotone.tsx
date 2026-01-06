import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SlidersVIconDuotone = memo(
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
          fillRule="evenodd"
          d="M7 11.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M17 5.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
          clipRule="evenodd"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M7.75 22a.75.75 0 0 1-1.5 0v-3.325a3.8 3.8 0 0 0 1.5 0zM17.75 22a.75.75 0 0 1-1.5 0v-9.325a3.8 3.8 0 0 0 1.5 0zM7 1.25a.75.75 0 0 1 .75.75v9.324a3.8 3.8 0 0 0-1.5 0V2A.75.75 0 0 1 7 1.25M17 1.25a.75.75 0 0 1 .75.75v3.324a3.8 3.8 0 0 0-1.5 0V2a.75.75 0 0 1 .75-.75" />
        </g>
      </svg>
    ))
);
SlidersVIconDuotone.displayName = "SlidersVIconDuotone";
export { SlidersVIconDuotone };
