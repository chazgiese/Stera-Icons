import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChecklistUncheckedFilled = memo(
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
          d="M5 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8M22 16a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2zM5 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8M22 6a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
ChecklistUncheckedFilled.displayName = "ChecklistUncheckedFilled";
export { ChecklistUncheckedFilled };
