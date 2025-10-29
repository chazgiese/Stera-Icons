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
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11 1.5a9.5 9.5 0 0 1 7.98 14.651l3.434 3.435a2 2 0 1 1-2.828 2.828L16.15 18.98A9.5 9.5 0 1 1 11 1.5m0 3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SearchIconFilled.displayName = "SearchIconFilled";
export { SearchIconFilled };
