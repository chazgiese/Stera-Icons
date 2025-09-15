import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SlidersVertical = memo(
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
          d="M13 9a4 4 0 0 1 3-3.874V2a1 1 0 1 1 2 0v3.126a4.002 4.002 0 0 1 0 7.748V22a1 1 0 1 1-2 0v-9.126A4 4 0 0 1 13 9m2 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 15a4 4 0 0 1 3-3.874V2a1 1 0 0 1 2 0v9.126a4.002 4.002 0 0 1 0 7.748V22a1 1 0 1 1-2 0v-3.126A4 4 0 0 1 3 15m2 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SlidersVertical.displayName = "SlidersVertical";
export { SlidersVertical };
