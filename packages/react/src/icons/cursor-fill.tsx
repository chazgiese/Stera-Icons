import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorIconFill = memo(
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
          d="M3.112 4.823c-.558-1.675 1.035-3.269 2.71-2.71l15.712 5.236c1.99.664 1.94 3.497-.072 4.09l-6.974 2.049-2.05 6.974c-.592 2.013-3.425 2.063-4.089.072z"
        />
      </svg>
    ))
);
CursorIconFill.displayName = "CursorIconFill";
export { CursorIconFill };
