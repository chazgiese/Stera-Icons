import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SearchBold = memo(
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
          d="M10.5 1a9.5 9.5 0 0 1 7.692 15.071l4.869 4.868a1.5 1.5 0 1 1-2.122 2.122l-4.868-4.869A9.5 9.5 0 1 1 10.5 1m0 2a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SearchBold.displayName = "SearchBold";
export { SearchBold };
