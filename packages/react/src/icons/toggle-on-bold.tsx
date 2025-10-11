import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToggleOnIconBold = memo(
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
        <path fill="currentColor" d="M15 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9 4a8 8 0 1 0 0 16h6a8 8 0 1 0 0-16zm6 2a6 6 0 0 1 0 12H9A6 6 0 0 1 9 6z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ToggleOnIconBold.displayName = "ToggleOnIconBold";
export { ToggleOnIconBold };
