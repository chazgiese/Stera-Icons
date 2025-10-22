import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SlidersVIcon = memo(
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
          d="M10.75 15a3.75 3.75 0 0 1-3 3.675V22a.75.75 0 0 1-1.5 0v-3.325a3.751 3.751 0 0 1 0-7.35V2a.75.75 0 0 1 1.5 0v9.325c1.712.348 3 1.86 3 3.675m-1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0M20.75 9a3.75 3.75 0 0 1-3 3.675V22a.75.75 0 0 1-1.5 0v-9.325a3.751 3.751 0 0 1 0-7.35V2a.75.75 0 0 1 1.5 0v3.325c1.712.348 3 1.86 3 3.675m-1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SlidersVIcon.displayName = "SlidersVIcon";
export { SlidersVIcon };
