import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToggleOnIconDuotone = memo(
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
          d="M15.398 4.26A7.75 7.75 0 0 1 15 19.75H9a7.75 7.75 0 0 1 0-15.5h6zM9 5.75a6.25 6.25 0 1 0 0 12.5h6a6.25 6.25 0 0 0 .321-12.492L15 5.75z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5"
        />
      </svg>
    ))
);
ToggleOnIconDuotone.displayName = "ToggleOnIconDuotone";
export { ToggleOnIconDuotone };
