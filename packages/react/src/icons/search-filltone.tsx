import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SearchIconFilltone = memo(
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
          d="M23.237 20.763a1.75 1.75 0 1 1-2.474 2.474l-5.5-5.5 2.474-2.474z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.5.5c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10m0 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SearchIconFilltone.displayName = "SearchIconFilltone";
export { SearchIconFilltone };
