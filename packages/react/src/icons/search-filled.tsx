import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SearchIconFilled = memo(
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
        <g
          fill="currentColor"
          fillRule="evenodd"
          clipPath="url(#clip0_5005_1144)"
          clipRule="evenodd"
        >
          <path d="M10.5.5c5.523 0 10 4.477 10 10 0 2.13-.669 4.1-1.803 5.723l4.54 4.54a1.75 1.75 0 1 1-2.474 2.474l-4.54-4.54A9.95 9.95 0 0 1 10.5 20.5c-5.523 0-10-4.477-10-10s4.477-10 10-10m0 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14" />
          <path d="M10.5.5c5.523 0 10 4.477 10 10 0 2.13-.669 4.1-1.803 5.723l4.54 4.54a1.75 1.75 0 1 1-2.474 2.474l-4.54-4.54A9.95 9.95 0 0 1 10.5 20.5c-5.523 0-10-4.477-10-10s4.477-10 10-10m0 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14" />
        </g>
      </svg>
    ))
);
SearchIconFilled.displayName = "SearchIconFilled";
export { SearchIconFilled };
