import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FigmaIconDuotone = memo(
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
          d="M15.335 1.25a4.084 4.084 0 0 1 2.357 7.416 4.083 4.083 0 0 0-4.941 6.495v3.506a4.084 4.084 0 1 1-6.441-3.334A4.08 4.08 0 0 1 4.584 12c0-1.377.682-2.594 1.726-3.334A4.083 4.083 0 0 1 8.667 1.25zM8.667 16.083a2.584 2.584 0 1 0 2.584 2.584v-2.584zm0-6.666a2.583 2.583 0 0 0 0 5.166h2.584V9.417zm0-6.667a2.583 2.583 0 0 0 0 5.167h2.584V2.75zm4.085 5.167h2.583a2.584 2.584 0 0 0 0-5.167h-2.583z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.335 7.917a4.084 4.084 0 1 1 0 8.168 4.084 4.084 0 0 1 0-8.168m0 1.5a2.583 2.583 0 1 0 0 5.166 2.583 2.583 0 0 0 0-5.166"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FigmaIconDuotone.displayName = "FigmaIconDuotone";
export { FigmaIconDuotone };
