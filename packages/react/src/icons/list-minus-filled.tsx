import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListMinusIconFilled = memo(
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
          d="M17.5 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M15 13.6a.9.9 0 0 0 0 1.8h5a.9.9 0 0 0 0-1.8z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M9 14.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM9 9.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM22 4.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 1 1 0-3z"
        />
      </svg>
    ))
);
ListMinusIconFilled.displayName = "ListMinusIconFilled";
export { ListMinusIconFilled };
