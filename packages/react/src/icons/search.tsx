import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SearchIcon = memo(
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
          d="M10.875 2.125a8.75 8.75 0 0 1 8.75 8.75 8.7 8.7 0 0 1-1.898 5.438l3.855 3.855a1 1 0 1 1-1.414 1.414l-3.855-3.855a8.7 8.7 0 0 1-5.438 1.898 8.75 8.75 0 1 1 0-17.5m0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SearchIcon.displayName = "SearchIcon";
export { SearchIcon };
