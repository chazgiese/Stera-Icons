import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToggleOnIconFilled = memo(
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
          d="M15 4a8 8 0 1 1 0 16H9A8 8 0 1 1 9 4zm0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ToggleOnIconFilled.displayName = "ToggleOnIconFilled";
export { ToggleOnIconFilled };
