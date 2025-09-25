import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListCheckTwoFilled = memo(
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
          d="M6.966 12.414a1.5 1.5 0 1 1 2.068 2.172l-4.2 4a1.5 1.5 0 0 1-2.213-.158l-1.8-2.285a1.5 1.5 0 0 1 2.357-1.857l.78.992zM22 14a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1 0-3zM6.966 5.414a1.5 1.5 0 1 1 2.068 2.172l-4.2 4a1.5 1.5 0 0 1-2.213-.158L.82 9.143a1.5 1.5 0 0 1 2.357-1.857l.78.992zM22 7a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1 0-3z"
        />
      </svg>
    ))
);
ListCheckTwoFilled.displayName = "ListCheckTwoFilled";
export { ListCheckTwoFilled };
