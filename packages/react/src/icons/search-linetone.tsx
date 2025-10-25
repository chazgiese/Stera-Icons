import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SearchIconLinetone = memo(
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
          d="M23.06 20.94a1.5 1.5 0 1 1-2.12 2.12l-5.5-5.5 2.12-2.12z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.5 1a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19m0 2a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SearchIconLinetone.displayName = "SearchIconLinetone";
export { SearchIconLinetone };
