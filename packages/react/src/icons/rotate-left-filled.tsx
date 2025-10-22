import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RotateLeftIconFilled = memo(
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
          d="M10.47.47a.75.75 0 0 1 1.28.53v3H12a9 9 0 1 1-9 9 1 1 0 0 1 2 0 7 7 0 1 0 7-7h-.25v3a.75.75 0 0 1-1.28.53l-4-4a.75.75 0 0 1 0-1.06z"
        />
      </svg>
    ))
);
RotateLeftIconFilled.displayName = "RotateLeftIconFilled";
export { RotateLeftIconFilled };
