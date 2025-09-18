import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SearchFilled = memo(
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
        <g clipPath="url(#a)">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10.5.5c5.523 0 10 4.477 10 10a9.95 9.95 0 0 1-1.66 5.513l4.574 4.573a2 2 0 1 1-2.828 2.828l-4.573-4.573A9.95 9.95 0 0 1 10.5 20.5c-5.523 0-10-4.477-10-10s4.477-10 10-10m0 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="currentColor" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    ))
);
SearchFilled.displayName = "SearchFilled";
export { SearchFilled };
