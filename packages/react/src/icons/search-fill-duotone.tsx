import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SearchIconFillDuotone = memo(
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
          d="M22.164 19.336a2 2 0 1 1-2.828 2.828l-3.435-3.434A9.55 9.55 0 0 0 18.73 15.9z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.75 1.25a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19m0 3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SearchIconFillDuotone.displayName = "SearchIconFillDuotone";
export { SearchIconFillDuotone };
